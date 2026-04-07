package com.example.projet_ecomerce_back.repositories;

import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {
}
