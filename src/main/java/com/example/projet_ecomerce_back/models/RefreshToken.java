package com.example.projet_ecomerce_back.models;

import jakarta.persistence.*;

import java.time.Instant;
@Entity(name = "refreshtoken")

public class RefreshToken {
    @Id
    @SequenceGenerator(name="refresh_token_seq", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "refresh_token_seq")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private UserModel user;

    @Column(nullable = false, unique = true)
    private String token;

    @Column(nullable = false)
    private Instant expiryDate;

    public Instant getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Instant expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RefreshToken() {
    }

    public RefreshToken(Long id, UserModel user, String token, Instant expiryDate) {
        this.id = id;
        this.user = user;
        this.token = token;
        this.expiryDate = expiryDate;
    }
}
