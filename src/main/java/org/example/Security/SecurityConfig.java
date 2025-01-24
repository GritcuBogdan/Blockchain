package org.example.Security;

import org.example.Entity.User;
import org.example.Repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository){
        return username -> {
            User user = userRepository.findByUsername(username);
            if(user != null) return user;

            throw new UsernameNotFoundException("User '" + username + "' not found");
        };
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

            http.authorizeHttpRequests(auth -> auth
                    .requestMatchers("/register", "/login", "/logout").permitAll()
                    .requestMatchers("/").authenticated()
                    .anyRequest().hasRole("USER")
            );


             http.formLogin(formLogin -> formLogin
                        .loginPage("/login")
                        .permitAll()
                );
                http.logout(lOut -> lOut
                        .logoutSuccessUrl("/")
                        .permitAll()
                );

        return http.build();

    }
}
