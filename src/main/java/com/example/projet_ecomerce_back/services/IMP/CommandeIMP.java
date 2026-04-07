package com.example.projet_ecomerce_back.services.IMP;

import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Commande;
import com.example.projet_ecomerce_back.repositories.ClientRepo;
import com.example.projet_ecomerce_back.repositories.CommandeRepo;
import com.example.projet_ecomerce_back.services.ClientService;
import com.example.projet_ecomerce_back.services.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommandeIMP implements CommandeService {

    @Autowired
    CommandeRepo commandeRepo;

    public Commande createCommande(Commande CM) {
        return commandeRepo.save(CM);
    }

    public Commande UpdateCommande(Commande CM) {
        return commandeRepo.save(CM);
    }

    public Commande GetOneCommande(Long id) {
        return commandeRepo.findById(id).orElse(null);
    }

    public List<Commande> GetAllCommande() {
        return commandeRepo.findAll();
    }

    public List<Commande> GetUnconfirmedOrders() {
        return commandeRepo.findByIsConfirmedFalse();
    }

    public void deleteCommande(Long id) {
        commandeRepo.deleteById(id);
    }

    public void confirmOrder(Long id) {
        commandeRepo.confirmOrder(id);
    }
}