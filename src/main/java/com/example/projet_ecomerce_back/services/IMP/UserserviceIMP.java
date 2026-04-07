package com.example.projet_ecomerce_back.services.IMP;


import com.example.projet_ecomerce_back.models.UserModel;
import com.example.projet_ecomerce_back.repositories.UserRepo;
import com.example.projet_ecomerce_back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UserserviceIMP implements UserService {
    @Autowired
    UserRepo userRepo;
    public UserModel createUser (UserModel UM){
        return userRepo.save(UM);
    }
    public UserModel UpdateUser (UserModel UM){
        return userRepo.save(UM);
    }
    public UserModel GetOneUser (Long id) {
        return userRepo.findById(id).orElse(null) ;
    }
    public List<UserModel> GetAllUsers (){
        return userRepo.findAll() ;
    }
    public void deleteUser (Long id){
        userRepo.deleteById(id);
    }

}
