package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.models.UserModel;

import java.util.List;
import java.util.Optional;

public interface ProduitService {
    public Produit createProduit (Produit PRD);
    public Produit UpdateProduit (Produit PRD);
    public Produit GetOneProduit (Long id) ;
    public List<Produit> getAllProduit ();
    public List<Produit> getProductsByCategoryId(Optional<Long> idcat) ;
    public void deleteProduit (Long id);
}