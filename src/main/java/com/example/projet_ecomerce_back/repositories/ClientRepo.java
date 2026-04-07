package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepo extends JpaRepository<Client, Long> {
    Optional<Client> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    Client findFirstByEmail (String email);
    Client findByPasswordResetToken(String passwordResetToken);
}
