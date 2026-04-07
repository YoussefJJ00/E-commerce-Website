package com.example.projet_ecomerce_back.services;

import com.example.projet_ecomerce_back.models.UserModel;

import java.util.List;

public interface UserService {
    public UserModel createUser (UserModel UM);
    public UserModel UpdateUser (UserModel UM);
    public UserModel GetOneUser (Long id) ;
    public List<UserModel> GetAllUsers ();
    public void deleteUser (Long id);
}
