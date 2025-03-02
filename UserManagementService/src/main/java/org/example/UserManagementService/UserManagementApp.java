package org.example.UserManagementService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class UserManagementApp {
    public static void main(String[] args) {
        SpringApplication.run(UserManagementApp.class, args);
    }
}