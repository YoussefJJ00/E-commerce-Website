package com.example.projet_ecomerce_back.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin extends UserModel{

    private String Adress2 ;
    private String cin;

    public Admin() {
    }

    public Admin(String email, String username, String password, String phone, String photo, String role, String cin, String adress2) {
        super(email, username, password, phone, role, photo);
        this.cin = cin;
        Adress2 = adress2;
    }


    public String getAdress2() {
        return Adress2;
    }

    public void setAdress2(String adress2) {
        Adress2 = adress2;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

}
