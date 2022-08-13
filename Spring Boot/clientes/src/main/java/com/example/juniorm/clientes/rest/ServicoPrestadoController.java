package com.example.juniorm.clientes.rest;

import com.example.juniorm.clientes.model.enity.Cliente;
import com.example.juniorm.clientes.model.enity.ServicoPrestado;
import com.example.juniorm.clientes.model.repository.ClienteRepository;
import com.example.juniorm.clientes.model.repository.ServicoPrestadoRepository;
import com.example.juniorm.clientes.rest.dto.ServicoPrestadoDTO;
import com.example.juniorm.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;

import org.h2.util.StringUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor // construtor
//@CrossOrigin("http://localhost:4200")
//ligando com o sistema do site

//************************************************************************
//****************** aqui é onde vai ser testado no postman **************
//************************************************************************
public class ServicoPrestadoController {

	private final ClienteRepository clienteRepository;
	private final ServicoPrestadoRepository respository;
	private final BigDecimalConverter bigDecimalConverter;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ServicoPrestado salvar(@RequestBody @Valid ServicoPrestadoDTO dto) {
		LocalDate data = LocalDate.parse(dto.getDataServico(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
		Integer codigoCliente = dto.getCodigoCliente();

		Cliente cliente = clienteRepository.findById(codigoCliente)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente."));

		ServicoPrestado servicoPrestado = new ServicoPrestado();
		servicoPrestado.setDescricao(dto.getDescricao());
		servicoPrestado.setDataServico(data);
		servicoPrestado.setCliente(cliente);
		servicoPrestado.setValor(bigDecimalConverter.converter(dto.getPreco()));

		return respository.save(servicoPrestado);
	}

	@GetMapping
	public List<ServicoPrestado> search(@RequestParam(value = "nome", required = false, defaultValue = "") String nome,
			@RequestParam(value = "mes", required = false) Integer mes) {
		if (StringUtils.isNullOrEmpty(nome) && mes == null) {
			return respository.findAll();
		}
		return respository.findByNomeClienteAndMes("%" + nome + "%", mes);
	}

}
