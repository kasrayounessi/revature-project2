package com.younessi.bookstore.website.service;

import com.younessi.bookstore.website.entities.User;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public interface UserServices {

    public List<User> getAllUsers();
    public User getUserByUsername(String username);
    public User saveUser(User user);


}
