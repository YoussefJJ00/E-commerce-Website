package com.example.projet_ecomerce_back.services.IMP;


import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.repositories.AdminRepo;
import com.example.projet_ecomerce_back.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminIMP implements AdminService {
    @Autowired
    AdminRepo adminRepo ;
    public Admin createAdmin (Admin ADMN){
        return adminRepo.save(ADMN);
    }
    public Admin UpdateAdmin (Admin ADMN){
        return adminRepo.save(ADMN);
    }
    public Admin GetOneAdmin (Long id) {
        return adminRepo.findById(id).orElse(null) ;
    }
    public List<Admin> GetAllAdmin (){
        return adminRepo.findAll();
    }
    public void deleteAdmin (Long id){
        adminRepo.deleteById(id);
    }
}
