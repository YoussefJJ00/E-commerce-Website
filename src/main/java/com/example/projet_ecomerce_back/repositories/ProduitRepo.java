package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProduitRepo extends JpaRepository<Produit, Long> {

    List<Produit> findByCat_Id (Long idcat);


}