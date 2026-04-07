package com.example.projet_ecomerce_back.controllers;

import com.example.projet_ecomerce_back.models.RefreshToken;
import com.example.projet_ecomerce_back.models.UserModel;
import com.example.projet_ecomerce_back.payload.request.Loginrequest;
import com.example.projet_ecomerce_back.payload.response.JWTresponse;
import com.example.projet_ecomerce_back.payload.response.MessageResponse;
import com.example.projet_ecomerce_back.repositories.UserRepo;
import com.example.projet_ecomerce_back.security.jwt.JwtUtils;
import com.example.projet_ecomerce_back.security.services.RefreshTokenService;
import com.example.projet_ecomerce_back.security.services.UserDetailsImpl;
import com.example.projet_ecomerce_back.services.UserService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("/Auth")
public class Authentification {
    @Autowired
    RefreshTokenService refreshTokenService;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepo userRepository;

    @PostMapping("login")

    public ResponseEntity<?> login(@Valid @RequestBody Loginrequest lg) throws MessagingException {
        System.out.println("username" + lg.getUsername());
        System.out.println("password" + lg.getPassword());
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(lg.getUsername(), lg.getPassword()));

        Optional<UserModel> u = userRepository.findByUsername(lg.getUsername());
        System.out.println("user username" + u.get().getUsername());
        System.out.println("user confirmed?" + u.get().isConfirm());
        if (u.get().isConfirm()) {
            //creation de l'user
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

            //creation du code jwt
            String jwt = jwtUtils.generateJwtToken(userDetails);
            //creation du refreshtoken
            RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());
            //return resultat
            List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            return ResponseEntity.ok(new JWTresponse(jwt, "Bearer", refreshToken.getToken(), userDetails.getId(), userDetails.getUsername(),
                    userDetails.getEmail(), roles, userDetails.getRole()));
        } else {
            throw new RuntimeException("User is not confirmed");
        }
    }

    @GetMapping("/logout")

    public ResponseEntity<?> logoutUser() {

        UserDetailsImpl userDetails =
                (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Long userId = userDetails.getId();


        refreshTokenService.deleteByUserId(userId);


        return ResponseEntity.ok(new MessageResponse("Log out successful!"));
    }
}