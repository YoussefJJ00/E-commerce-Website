package com.example.projet_ecomerce_back.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import com.securityEcommerce.models.User;
//import com.securityEcommerce.repository.UserRepository;
import com.example.projet_ecomerce_back.models.UserModel;
import com.example.projet_ecomerce_back.repositories.UserRepo;
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
 @Autowired
UserRepo userRepository;

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserModel user = userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

    //return UserDetailsImpl.build(user);
      return UserDetailsImpl.build(user);
  }

}
