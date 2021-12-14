package com.younessi.project2.bookstore.revature.services;

import com.younessi.project2.bookstore.revature.entities.User;
import com.younessi.project2.bookstore.revature.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserRepository userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findUserByUsername(username);

        if(null==user){
            throw new UsernameNotFoundException("User "+username+" not found");
        }
        return user;
    }
}
