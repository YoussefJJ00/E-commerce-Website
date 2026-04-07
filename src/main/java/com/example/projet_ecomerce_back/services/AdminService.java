package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Produit;

import java.util.List;

public interface AdminService {
    public Admin createAdmin (Admin ADMN);
    public Admin UpdateAdmin (Admin ADMN);
    public Admin GetOneAdmin (Long id) ;
    public List<Admin> GetAllAdmin ();
    public void deleteAdmin (Long id);
}
