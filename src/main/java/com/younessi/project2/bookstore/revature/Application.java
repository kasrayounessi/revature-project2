package com.younessi.project2.bookstore.revature;

import com.younessi.project2.bookstore.revature.entities.Authority;
import com.younessi.project2.bookstore.revature.entities.User;
import com.younessi.project2.bookstore.revature.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Application {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserRepository userRepo;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@PostConstruct
	protected void init() {
		List<Authority> authorityList = new ArrayList<>();

		authorityList.add(createAuthority("USER","User Role"));
		//authorityList.add(createAuthority("ADMIN","Admin role"));

		User user=new User();

		user.setUsername("kasrayou");
		user.setPassword(passwordEncoder.encode("123"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);

		userRepo.save(user);
	}

	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}

}
