package com.example.projet_ecomerce_back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Client extends UserModel{

    private String codeClient ;

    public Client() {
    }

    public Client(String email, String username, String password, String phone, String photo, String role, String codeClient) {
        super(email, username, password, phone, role, photo);
        this.codeClient = codeClient;
    }

    public String getCodeClient() {
        return codeClient;
    }

    public void setCodeClient(String codeClient) {
        this.codeClient = codeClient;
    }

    @OneToMany(mappedBy = "client")
    private List<Commande> commandeList;

    @JsonIgnore
    public List<Commande> getCommandeList() {
        return commandeList;
    }

    public void setCommandeList(List<Commande> commandeList) {
        this.commandeList = commandeList;
    }

}
