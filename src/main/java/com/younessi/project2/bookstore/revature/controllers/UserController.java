package com.younessi.project2.bookstore.revature.controllers;

import com.younessi.project2.bookstore.revature.entities.User;
import com.younessi.project2.bookstore.revature.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserServices service;

    @GetMapping("/users")
    public List<User> getUsers(){
        return service.findAllUsers();
    }

    @GetMapping("/users/{username}")
    public User getUserByUsername(@PathVariable("username") String username){
        return service.findUserByUsername(username);
    }

    @PostMapping("/users")
    public User postUser(User newUser){
        return service.saveUser(newUser);
    }

    @PostMapping("/login")
    public int verifyUser(User user){
        return service.verifyUser(user);
    }
}
