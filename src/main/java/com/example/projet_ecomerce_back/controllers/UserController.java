package com.example.projet_ecomerce_back.controllers;


import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.models.UserModel;
import com.example.projet_ecomerce_back.payload.request.Signuprequest;
import com.example.projet_ecomerce_back.payload.response.MessageResponse;
import com.example.projet_ecomerce_back.repositories.UserRepo;
import com.example.projet_ecomerce_back.services.IMP.AdminIMP;
import com.example.projet_ecomerce_back.services.IMP.UserserviceIMP;
import com.example.projet_ecomerce_back.utils.StorageService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserserviceIMP imp;
    @Autowired
    StorageService str;
    @Autowired
    UserRepo userRepo;
    @Autowired
    JavaMailSender javaMailSender;
    @PostMapping("/create0")
    public UserModel createUserAdmin (UserModel u){
        return imp.createUser(u);
    }
    @GetMapping("/list")
    public List<UserModel> getall(){
        return imp.GetAllUsers();}
    @GetMapping("/one/{id}")
    public UserModel getone(@PathVariable Long id){
        return imp.GetOneUser(id);

    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        imp.deleteUser(id);
    }
    @PatchMapping("/update/{id}")
    public UserModel update(@PathVariable Long id , UserModel c){
        c.setId(id);
        UserModel ancien = imp.GetOneUser(id);
        if (c.getUsername() == null) {
            c.setUsername(ancien.getUsername());
        }
        if (c.getEmail() == null) {
            c.setEmail(ancien.getEmail());
        }
        if (c.getPassword() == null) {
            c.setPassword(ancien.getPassword());
        }
        if (c.getRole() == null) {
            c.setRole(ancien.getRole());
        }
        if (c.getPhoto() == null) {
            c.setPhoto(ancien.getPhoto());
        }
        return imp.UpdateUser(c);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(Signuprequest s, @RequestParam("file") MultipartFile file) throws MessagingException {
        UserModel u = new UserModel(s.getUsername(),s.getEmail(),s.getPassword(),s.getPhone(),s.getRole(),s.getPhoto());
        String name = str.store(file);
        u.setPhoto(name);
        imp.createUser(u);
        String from ="itService.mail.fr";
        String to=u.getEmail();
        String subject ="confirmation";
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper=new MimeMessageHelper(message);
        messageHelper.setSubject(subject);
        messageHelper.setTo(to);
        messageHelper.setFrom(from);
        messageHelper.setText("<HTML><body>" +
                " <a href=\"http://localhost:8085/Admin/confirm?email="
                +u.getEmail()+"\">VERIFY</a></body></HTML>",true);

        javaMailSender.send(message);//envoyer email

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
    @GetMapping("/confirm")
    public ResponseEntity<?> confirm(@RequestParam String email) {


        // Create new user's account
        UserModel u = userRepo.findFirstByEmail(email);
        if(u != null){
            u.setConfirm(true);
            userRepo.save(u);
            return ResponseEntity.ok(new MessageResponse("user is confirmed"));
        }
        return ResponseEntity.ok(new MessageResponse("User not confirmed!"));
    }


}


