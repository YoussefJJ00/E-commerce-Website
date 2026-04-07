package com.example.projet_ecomerce_back.services.IMP;


import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.repositories.ProduitRepo;
import com.example.projet_ecomerce_back.services.ProduitService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitIMP implements ProduitService {
    @Autowired
    ProduitRepo produitRepo;
    @Autowired
    CategoryserviceIMP categoryservice;

    public Produit createProduit (Produit PRD){
        return produitRepo.save(PRD);
    }
    public Produit UpdateProduit (Produit PRD){
        return produitRepo.save(PRD);
    }

    public Produit GetOneProduit (Long id) {
        return produitRepo.findById(id).orElse(null);
    }

    @Override
    public List<Produit> getAllProduit() {
        return produitRepo.findAll();
    }

    @Override
    public List<Produit> getProductsByCategoryId(Optional<Long> catId){
        return catId.map(categoryId -> {
            return produitRepo.findByCat_Id(categoryId);
        }).orElseGet(() -> {
            return produitRepo.findAll();
        });
    }
    public void deleteProduit (Long id){
        produitRepo.deleteById(id);
    }
}
