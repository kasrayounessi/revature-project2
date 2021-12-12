package com.younessi.bookstore.website.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@ToString
@Table(
        name="users",
        uniqueConstraints = @UniqueConstraint(
                name="username_unique",
                columnNames = "username"
        ))
public class User {
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @Column(
            name = "username",
            nullable = false
    )
    private String username;
    private String email;

    @Column (nullable = false)
    private String password;

    private int age;
    private String state;

    public User(){}

    public User(String username, String email, String password, int age, String state) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
        this.state = state;
    }
}
