package com.younessi.bookstore.website.controllers;

import com.younessi.bookstore.website.entities.User;
import com.younessi.bookstore.website.repositories.UserRepository;
import com.younessi.bookstore.website.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;


@RestController
public class UserController {

    @Autowired
    private UserServices service;

    @GetMapping("/users")
    public List<User> getUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/users/{username}")
    public User getUsers(@PathVariable("username") String username){
        return service.getUserByUsername(username);
    }

    @PostMapping("/users")
    public User postUser(@RequestBody User newUser){
        return service.saveUser(newUser);
    }
}
