package io.example.juniorm.service;

import io.example.juniorm.model.Cliente;
import io.example.juniorm.repository.ClientesRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {


    private ClientesRespository respository;

    public ClientesService( ClientesRespository respository){
        this.respository = respository;
    }

    public void salvarCliente(Cliente cliente){
        validarCliente(cliente);
        // não precisa criar um objeto
        //ClientesRespository clientesRespository = new ClientesRespository();

        this.respository.persistir(cliente);

    }

    public void validarCliente(Cliente cliente){
        //aplica validacoes
    }

}
