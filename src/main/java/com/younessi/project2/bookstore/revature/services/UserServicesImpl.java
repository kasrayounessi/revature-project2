package com.younessi.project2.bookstore.revature.services;

import com.younessi.project2.bookstore.revature.entities.User;
import com.younessi.project2.bookstore.revature.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServicesImpl implements UserServices{

    @Autowired
    UserRepository userRepo;

    @Override
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepo.findUserByUsername(username);
    }

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public int verifyUser(User user) {
        System.out.println(user.getUsername());
        User retrievedUser = userRepo.findUserByUsername(user.getUsername());
        System.out.println("***********************");
        System.out.println(user);
        System.out.println("***********************");
        System.out.println(retrievedUser);
        if(retrievedUser == null)
            return 0; //0 : no username as such found
        else{
            if((retrievedUser.getPassword()).equals(user.getPassword())){
                return 2; // account verified
            } else{
                return 1; // wrong password
            }
        }
    }
}
