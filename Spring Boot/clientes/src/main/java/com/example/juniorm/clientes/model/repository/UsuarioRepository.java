package com.example.juniorm.clientes.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.juniorm.clientes.model.enity.Usuario;

//Integer é o codigo do usuário 
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	
	Optional<Usuario> findByUsername(String username);

	//#AULA104
	boolean existsByUsername(String username);
	
}
