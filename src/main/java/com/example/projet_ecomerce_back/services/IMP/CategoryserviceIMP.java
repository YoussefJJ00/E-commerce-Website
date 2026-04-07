package com.example.projet_ecomerce_back.services.IMP;


import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.repositories.CategoryRepo;
import com.example.projet_ecomerce_back.services.CategoryService;
import com.example.projet_ecomerce_back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryserviceIMP implements CategoryService {
    @Autowired
    CategoryRepo categoryRepo ;
    public Category createCategory (Category CAT){
        return categoryRepo.save(CAT);
    }
    public Category UpdateCategory (Category CAT){
        return categoryRepo.save(CAT);
    }
    public Category GetOneCategory (Long id) {
        return categoryRepo.findById(id).orElse(null);
    }
    public List<Category> GetAllCategory () {
        return categoryRepo.findAll();
    }
    public void deleteCategory (Long id){
        categoryRepo.deleteById(id);
    }
}
