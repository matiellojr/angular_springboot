package com.example.juniorm.clientes.model.repository;

import com.example.juniorm.clientes.model.enity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
