package com.younessi.project2.bookstore.revature.repositories;

import com.younessi.project2.bookstore.revature.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.username= ?1")
    User findUserByUsername(String username);
}
