package com.example.juniorm.clientes.model.enity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(unique = true, name = "login")
	@NotEmpty(message = "{campo.usuario.obrigatorio}")
	private String username;
	
	@Column(name = "senha")
	@NotEmpty(message = "{campo.senha.obrigatorio}")
	private String password;
	
	
}
