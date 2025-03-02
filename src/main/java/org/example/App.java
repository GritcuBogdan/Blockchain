package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = "org.example")
@EntityScan(basePackages ={"org.example.Entity"})
@EnableScheduling
public class App {
    public static void main(String[] args) {
       SpringApplication.run(App.class,args);
    }
}


