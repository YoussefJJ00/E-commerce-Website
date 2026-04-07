package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    Admin findFirstByEmail (String email);
    Admin findByPasswordResetToken(String passwordResetToken);
}
