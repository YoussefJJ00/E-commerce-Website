package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.models.UserModel;

import java.util.List;

public interface CategoryService {
    public Category createCategory (Category CAT);
    public Category UpdateCategory (Category CAT);
    public Category GetOneCategory (Long id) ;
    public List<Category> GetAllCategory ();
    public void deleteCategory (Long id);
}