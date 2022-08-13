package com.example.juniorm.clientes.exception;

//#AULA104

public class UsuarioCadastradoException extends RuntimeException {

	public UsuarioCadastradoException(String login) {
		super("O usuário " + login + " já está cadastrado no sistema");
	}
}
