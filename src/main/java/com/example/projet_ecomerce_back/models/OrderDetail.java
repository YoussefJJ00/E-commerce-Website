package com.example.projet_ecomerce_back.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String country;
    private String city;
    private String address;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Commande order;  // Reference to Commande (Order)

    // Constructors, getters, and setters

    public OrderDetail() {
    }

    public OrderDetail(String country, String city, String address, Commande order) {
        this.country = country;
        this.city = city;
        this.address = address;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Commande getOrder() {
        return order;
    }

    public void setOrder(Commande order) {
        this.order = order;
    }

}
