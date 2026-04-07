package com.example.projet_ecomerce_back.models;


import com.example.projet_ecomerce_back.services.CommandeService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.swing.border.Border;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date ordredate;
    private String num;
    private Double total;

    private String country ;
    private String city ;
    private String address ;

    private int [] quantite;

    @Column
    private Boolean isConfirmed = false;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "client")

    private Client client;


    @ManyToMany
    @JoinTable(name = "Commande_Produit" , joinColumns = @JoinColumn(name = "CommandeId") , inverseJoinColumns = @JoinColumn (name = "ProduitId"))
    private List<Produit> produits ;

    // New field to store product names
    @Transient
    private List<String> produitNames;

    @JsonIgnore
    public List<Produit> getProduits() {
        return produits;
    }
    public void setProduits(List<Produit> produits) {
        this.produits = produits;
    }
    public void Add_produit(Produit p)
    {
        if(produits == null ){produits = new ArrayList<>();}
        produits.add(p);
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOrdredate() {
        return ordredate;
    }

    public void setOrdredate(Date ordredate) {
        this.ordredate = ordredate;
    }

    public int[] getQuantite() {
        return quantite;
    }

    public void setQuantite(int[] quantite) {
        this.quantite = quantite;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public List<String> getProduitNames() {
        return produitNames;
    }


    public void setProduitNames(List<String> produitNames) {
        this.produitNames = produitNames;
    }
    @PostLoad
    private void initializeProduitNames() {
        if (produits != null) {
            produitNames = new ArrayList<>();
            for (Produit produit : produits) {
                produitNames.add(produit.getName());
            }
        }
    }
    public Commande() {
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Commande(Date ordredate, String num, Double total, String country, String address, String city , Client client, List<Produit> produits, List<String> produitNames, int[] quantite) {
        this.ordredate = ordredate;
        this.num = num;
        this.total = total;
        this.country = country ;
        this.address = address  ;
        this.city = city ;
        this.quantite = quantite != null ? quantite : new int[0];
        this.client = client;
        this.produits = produits;
        this.produitNames = produitNames;
    }
}
