package com.example.projet_ecomerce_back.controllers;


import com.example.projet_ecomerce_back.models.Admin;
import com.example.projet_ecomerce_back.models.Category;
import com.example.projet_ecomerce_back.services.IMP.CategoryserviceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/category")
public class Categorycontroller {
    @Autowired
    CategoryserviceIMP categoryserviceIMP;


    @PostMapping("/create")
    public Category creation(Category c){
        return  categoryserviceIMP.createCategory(c);
    }

    @GetMapping("/list")
    public List<Category> list(){
        return categoryserviceIMP.GetAllCategory() ;
    }
    @GetMapping("/one/{id}")
    public Category getone (@PathVariable Long id){
        return categoryserviceIMP.GetOneCategory(id);
    }
    @DeleteMapping("/delete_one/{id}")
    public void deleteme (@PathVariable Long id){
        categoryserviceIMP.deleteCategory(id);
    }
    @PatchMapping("/update/{id}")
    public Category update(@PathVariable Long id, Category c){
        c.setId(id);
        Category ancien = categoryserviceIMP.GetOneCategory(id);
        if (c.getName() == null) { c.setName(ancien.getName()); }
        if (c.getDescription() == null) { c.setDescription(ancien.getDescription()); }
        return categoryserviceIMP.UpdateCategory(c);
    }
}
