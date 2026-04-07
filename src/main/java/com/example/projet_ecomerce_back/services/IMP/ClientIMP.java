package com.example.projet_ecomerce_back.services.IMP;

import com.example.projet_ecomerce_back.models.Client;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.repositories.ClientRepo;
import com.example.projet_ecomerce_back.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientIMP implements ClientService {

    @Autowired
    ClientRepo clientRepo ;
    public Client createClient (Client CL) {
        return clientRepo.save(CL) ;
    }
    public Client UpdateClient (Client CL){
        return clientRepo.save(CL) ;
    }
    public Client GetOneClient (Long id) {
        return clientRepo.findById(id).orElse(null) ;
    }
    public List<Client> GetAllClient (){
        return clientRepo.findAll();
    }
    public void deleteClient (Long id){
        clientRepo.deleteById(id);
    }
}
