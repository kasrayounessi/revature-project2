package com.younessi.project2.bookstore.revature.services;

import com.younessi.project2.bookstore.revature.entities.User;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public interface UserServices {

    public List<User> findAllUsers();
    public User findUserByUsername(String username);
    public User saveUser(User user);
    public int verifyUser(User user);

}
