package com.younessi.project2.bookstore.revature.entities;

import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@ToString
@Table(
        name = "AUTH_USER_DETAILS",
        uniqueConstraints = @UniqueConstraint(
                name="username_unique",
                columnNames = "USERNAME"
        ))
public class User implements UserDetails {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(
            name="USERNAME",
            nullable=false
    )
    private String username;
    @Column(
            name = "PASSWORD",
            nullable = false
    )
    private String password;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name = "AUTH_USER_AUTHORITY", joinColumns = @JoinColumn(referencedColumnName = "id"),inverseJoinColumns = @JoinColumn(referencedColumnName ="id"))
    private List<Authority> authorities;

    @Column(name = "enabled")
    private boolean enabled=true;


    public User(){}

    public User(String username, String password) {
        this.username = username;
        this.password = password;

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.enabled;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.enabled;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.enabled;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
