package com.example.juniorm.clientes.rest;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.juniorm.clientes.exception.UsuarioCadastradoException;
import com.example.juniorm.clientes.model.enity.Usuario;
import com.example.juniorm.clientes.model.repository.UsuarioRepository;
import com.example.juniorm.clientes.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UserController {

	// http://localhost:8080/api/usuarios
	
	private final UsuarioService service;
	
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
	public void salvarUsuario(@RequestBody @Valid Usuario usuario) {
		//#AULA104
		try {
			service.salvar(usuario);
		} catch (UsuarioCadastradoException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
			
	}
	
}
