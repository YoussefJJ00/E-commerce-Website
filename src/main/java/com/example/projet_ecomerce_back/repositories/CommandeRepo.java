package com.example.projet_ecomerce_back.repositories;


import com.example.projet_ecomerce_back.models.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandeRepo  extends JpaRepository<Commande,Long> {

    public List<Commande> findByIsConfirmedFalse();

    @Modifying
    @Query("UPDATE Commande c SET c.isConfirmed = true")
    public void confirmOrder(Long id);

}
