package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.UserModel;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository <UserModel, Long> {
    Optional<UserModel> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    UserModel findFirstByEmail (String email);
    UserModel findByPasswordResetToken(String passwordResetToken);
}
