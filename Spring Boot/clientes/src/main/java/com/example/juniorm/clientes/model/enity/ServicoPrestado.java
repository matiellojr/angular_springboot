package com.example.juniorm.clientes.model.enity;

import com.example.juniorm.clientes.model.enity.Cliente;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;


@Entity
@Data
public class ServicoPrestado {

    //DataBase

    // primary-key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigoServico;

    @Column(nullable = false, length = 150)
    private String descricao;

    //ligação com a table Cliente, se existe um cliente 
    //que tenha o serviço prestado, não é possível excluir
    //primeiro, excluir o serviços para depois excluir o cliente
    @ManyToOne
    @JoinColumn(name = "codigo_cliente")
    private Cliente cliente;

    @Column
    private BigDecimal valor;

    @Column
    // #AULA76
    // senão colocar, vai aparecer assim >> "dataServico": "2021-01-14"
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataServico;

}

//@JoinColumn(name = "codigo_cliente") >>> chave estrangeira
// "dataServico": "2021-01-14"