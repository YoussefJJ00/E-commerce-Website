package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.ERole;
import com.example.projet_ecomerce_back.models.Produit;
import com.example.projet_ecomerce_back.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
