package com.example.projet_ecomerce_back.controllers;


import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.payload.request.Signuprequest;
import com.example.projet_ecomerce_back.payload.response.MessageResponse;
import com.example.projet_ecomerce_back.repositories.ClientRepo;
import com.example.projet_ecomerce_back.services.ClientService;
import com.example.projet_ecomerce_back.utils.StorageService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/client")
public class Clientcontroller {
    @Autowired
    ClientService clientIMP;

    @Autowired
    StorageService str ;
    @Autowired
    JavaMailSender javaMailSender;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    StorageService storageService;

    @PostMapping("/create")
    public ResponseEntity<?> creation(Signuprequest SN, @RequestParam("file") MultipartFile file) throws MessagingException {
        System.out.println("Password" + SN.getPassword());
        System.out.println("Password Hash" + encoder.encode(SN.getPassword()));

        Client cl = new Client(SN.getEmail(),
                SN.getUsername(),
                encoder.encode(SN.getPassword()),
                SN.getPhone(),
                null,
                SN.getRole(),
                SN.getCodeClient()
        );


        String name= str.store(file) ;
        cl.setPhoto(name);
        clientIMP.createClient(cl);
        String from ="itService.mail.fr";
        String to=cl.getEmail();
        String subject ="confirmation";
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper=new MimeMessageHelper(message);
        messageHelper.setSubject(subject);
        messageHelper.setTo(to);
        messageHelper.setFrom(from);
        messageHelper.setText("<HTML><body>" +
                " <a href=\"http://localhost:8085/client/confirm?email="
                +cl.getEmail()+"\">VERIFY</a></body></HTML>",true);

        javaMailSender.send(message);//envoyer email

        return ResponseEntity.ok(new MessageResponse("Client registered successfully!"));
    }

    @GetMapping("/list")
    public List<Client> list(){
        return clientIMP.GetAllClient() ;
    }
    @GetMapping("/one/{id}")
    public Client getone (@PathVariable Long id){
        return clientIMP.GetOneClient(id);
    }
    @DeleteMapping("/delete_one/{id}")
    public void deleteme (@PathVariable Long id){
        clientIMP.deleteClient(id);
    }
    @PatchMapping("/update/{id}")
    public Client update(@PathVariable Long id, Client CL){
        CL.setId(id);
        Client ancien = clientIMP.GetOneClient(id);
        if (CL.getUsername() == null) { CL.setUsername(ancien.getUsername()); }
        if (CL.getEmail() == null) { CL.setEmail(ancien.getEmail()); }
        if (CL.getPassword() == null) { CL.setPassword(ancien.getPassword()); }
        if (CL.getPhone() == null) { CL.setPhone(ancien.getPhone()); }
        if (CL.getPhoto() == null) { CL.setPhoto(ancien.getPhoto()); }
        if (CL.getRole() == null) { CL.setRole(ancien.getRole()); }
        if (CL.getCodeClient() == null) { CL.setCodeClient(ancien.getCodeClient()); }


        return clientIMP.UpdateClient(CL) ;
    }
    @PatchMapping("/update_with_photo/{id}")
    public Client update(@PathVariable Long id, Client CL, @RequestParam("file") MultipartFile file){
        CL.setId(id);
        Client ancien = clientIMP.GetOneClient(id);
        String name= str.store(file) ;
        CL.setPhoto(name);
        if (CL.getUsername() == null) { CL.setUsername(ancien.getUsername()); }
        if (CL.getEmail() == null) { CL.setEmail(ancien.getEmail()); }
        if (CL.getPassword() == null) { CL.setPassword(ancien.getPassword()); }
        if (CL.getPhone() == null) { CL.setPhone(ancien.getPhone()); }
        if (CL.getPhoto() == null) { CL.setPhoto(ancien.getPhoto()); }
        if (CL.getRole() == null) { CL.setRole(ancien.getRole()); }
        if (CL.getCodeClient() == null) { CL.setCodeClient(ancien.getCodeClient()); }


        return clientIMP.UpdateClient(CL) ;
    }
    @Autowired
    ClientRepo clientRepo;
    @GetMapping("/confirm")
    public ResponseEntity<?> confirm(@RequestParam String email) {


        // Create new user's account
        Client user = clientRepo.findFirstByEmail(email);
        if(user != null){
            user.setConfirm(true);
            clientRepo.save(user);
            return ResponseEntity.ok(new MessageResponse("user is confirmed"));
        }
        return ResponseEntity.ok(new MessageResponse("User not confirmed!"));
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getfile(@PathVariable String filename ){
        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
}


