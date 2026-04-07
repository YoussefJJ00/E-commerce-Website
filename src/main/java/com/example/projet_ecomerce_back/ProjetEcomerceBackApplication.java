package com.example.projet_ecomerce_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;

@SpringBootApplication(exclude = {JdbcTemplateAutoConfiguration.class})
public class ProjetEcomerceBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjetEcomerceBackApplication.class, args);
    }

}
