package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Commande;

import java.util.List;

public interface CommandeService {
    public Commande createCommande (Commande CM);
    public Commande UpdateCommande (Commande CM);
    public Commande GetOneCommande (Long id) ;
    public List<Commande> GetAllCommande ();
    public List<Commande> GetUnconfirmedOrders ();
    public void deleteCommande (Long id);
}