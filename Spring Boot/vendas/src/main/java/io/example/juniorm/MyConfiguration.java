package io.example.juniorm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;


//@Configuration
//// se colocar outro nome, por exemplo, "production" não vai imprimir, dependendo do que está na 'aplication.properties'
//@Profile("development")

@Development
public class MyConfiguration {

    @Bean
    public CommandLineRunner executar() {
        return args -> {
            System.out.println("RODANDO A CONFIGURAÇÃO DO DESENVOLVIMENTO");
        };
    }

}




// isso não precisa pois vai ter o name no file Application.properties
//    @Bean(name = "applicationName")
//    public String applicationName(){
//        return "Sistema de Vendas";
//    }