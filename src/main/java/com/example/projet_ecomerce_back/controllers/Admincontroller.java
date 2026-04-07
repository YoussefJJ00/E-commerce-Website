package com.example.projet_ecomerce_back.controllers;


import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.Mail;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.payload.request.Signuprequest;
import com.example.projet_ecomerce_back.payload.response.MessageResponse;
import com.example.projet_ecomerce_back.repositories.AdminRepo;
import com.example.projet_ecomerce_back.services.AdminService;
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
@RequestMapping("/Admin")
public class Admincontroller {
    @Autowired
    AdminService adminIMP;
    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    StorageService str ;
    @Autowired
    private StorageService storageService;
    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    PasswordEncoder encoder;

    @PostMapping("/create")
    public  ResponseEntity<?> creation(Signuprequest SN , @RequestParam("file") MultipartFile file) throws MessagingException {
        Admin a = new Admin(
                SN.getEmail(),
                SN.getUsername(),
                encoder.encode(SN.getPassword()),
                SN.getPhone(),
                null ,
                SN.getRole(),
                SN.getCin(),
                SN.getAdress2());



        String name= str.store(file) ;
        a.setPhoto(name);
        adminIMP.createAdmin(a);

        String from ="itService.mail.fr";
        String to=a.getEmail();
        String subject ="confirmation";
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper=new MimeMessageHelper(message);
        messageHelper.setSubject(subject);
        messageHelper.setTo(to);
        messageHelper.setFrom(from);
        messageHelper.setText("<HTML><body>" +
                " <a href=\"http://localhost:8085/Admin/confirm?email="
                +a.getEmail()+"\">VERIFY</a></body></HTML>",true);

        javaMailSender.send(message);//envoyer email

        return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
    }

    @GetMapping("/list")
    public List<Admin> list() {
        return adminIMP.GetAllAdmin();
    }

    @GetMapping("/one/{id}")
    public Admin getone(@PathVariable Long id) {
        return adminIMP.GetOneAdmin(id);
    }

    @DeleteMapping("/delete_one/{id}")
    public void deleteme(@PathVariable Long id) {
        adminIMP.deleteAdmin(id);
    }

    @PatchMapping("/update/{id}")
    public Admin update(@PathVariable Long id, Admin a) {
        a.setId(id);

        Admin ancien = adminIMP.GetOneAdmin(id);
        if (a.getUsername() == null) { a.setUsername(ancien.getUsername()); }
        if (a.getEmail() == null) { a.setEmail(ancien.getEmail()); }
        if (a.getPassword() == null) { a.setPassword(ancien.getPassword()); }
        if (a.getRole() == null) { a.setRole(ancien.getRole()); }
        if (a.getAdress2() == null) { a.setAdress2(ancien.getAdress2()); }
        if (a.getPhone() == null) { a.setPhone(ancien.getPhone()); }
        if (a.getCin() == null) { a.setCin(ancien.getCin()); }
        if (a.getPhoto() == null) { a.setPhoto(ancien.getPhoto()); }

        return adminIMP.UpdateAdmin(a);
    }
    @PatchMapping("/update_with_photo/{id}")
    public Admin update(@PathVariable Long id, Admin a ,@RequestParam("file") MultipartFile file) {
        a.setId(id);
        String name= str.store(file) ;
        a.setPhoto(name) ;
        Admin ancien = adminIMP.GetOneAdmin(id);
        if (a.getUsername() == null) { a.setUsername(ancien.getUsername()); }
        if (a.getEmail() == null) { a.setEmail(ancien.getEmail()); }
        if (a.getPassword() == null) { a.setPassword(ancien.getPassword()); }
        if (a.getRole() == null) { a.setRole(ancien.getRole()); }
        if (a.getAdress2() == null) { a.setAdress2(ancien.getAdress2()); }
        if (a.getPhone() == null) { a.setPhone(ancien.getPhone()); }
        if (a.getCin() == null) { a.setCin(ancien.getCin()); }
        if (a.getPhoto() == null) { a.setPhoto(ancien.getPhoto()); }

        return adminIMP.UpdateAdmin(a);
    }
    @PostMapping("/send_mail")
    public ResponseEntity<?> sendmail(Mail m , @RequestParam("file") MultipartFile file)throws MessagingException
    {

        String name= str.store(file) ;
        String to = m.getTo();
        String Subject = m.getSubject();
        String content = m.getContent();
        String from = m.getFrom();
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message);
        messageHelper.setSubject(Subject);
        messageHelper.setTo(to);
        messageHelper.setFrom(from);
        messageHelper.setText("<HTML><body>" +content+
                " <a href=\"http://localhost:8085/Admin/files/"
                + name + "\">file</a></body></HTML>", true);
        javaMailSender.send(message);//envoyer email
        return ResponseEntity.ok("Send") ;
    }
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getfile(@PathVariable String filename ){
        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
    @GetMapping("/confirm")
    public ResponseEntity<?> confirm( @RequestParam String email) {


        // Create new user's account
        Admin user = adminRepo.findFirstByEmail(email);
        if(user != null){
            user.setConfirm(true);
            adminRepo.save(user);
            return ResponseEntity.ok(new MessageResponse("user is confirmed"));
        }
        return ResponseEntity.ok(new MessageResponse("User not confirmed!"));
    }
}