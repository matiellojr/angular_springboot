import { Component, OnInit } from '@angular/core';
// import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../../clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes : Cliente[] = [];
  servico : ServicoPrestado;
  salvarPrestacaoServico: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
      .listClientes()
      .subscribe(response => this.clientes = response)
  }

  onSubmit(){
    // console.log(this.servico);
    this.service
      .salvar(this.servico)
      .subscribe( 
        response => {
          this.salvarPrestacaoServico = true;
          this.errors = [];
          this.servico = new ServicoPrestado();
      }, 
        errorResponse => {
          this.salvarPrestacaoServico = false;
          this.errors = errorResponse.error.errors;
        }
      )
  }


}
