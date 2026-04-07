package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Produit;

import java.util.List;

public interface ClientService {
    public Client createClient (Client CL);
    public Client UpdateClient (Client CL);
    public Client GetOneClient (Long id) ;
    public List<Client> GetAllClient ();
    public void deleteClient (Long id);
}
