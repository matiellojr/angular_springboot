package com.example.juniorm.clientes.rest.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {
	
	@NotEmpty(message = "{campo.nome.obrigatorio}")
    private String descricao;
	
	@NotEmpty(message = "{campo.preco.obrigatorio}")
    private String preco;
	
	@NotEmpty(message = "{campo.data.obrigatorio}")
    private String dataServico;
	
	@NotNull(message = "{campo.cliente.obrigatorio}")
    private Integer codigoCliente;
}

//Data Transfer Object (DTO) ou simplesmente Transfer Object
// é um padrão de projetos bastante usado em Java para o transporte
// de dados entre diferentes componentes de um sistema,
// diferentes instâncias ou processos de um sistema distribuído
// ou diferentes sistemas via serialização