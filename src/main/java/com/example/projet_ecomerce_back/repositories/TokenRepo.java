package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.RefreshToken;
import com.example.projet_ecomerce_back.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TokenRepo extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findByToken(String token);

    @Modifying
        int deleteByUser(UserModel user);

    @Modifying
    @Query(value = "DELETE FROM refreshtoken WHERE user_id = ?1", nativeQuery = true)
    void deleteByUserId(Long userId);
}
