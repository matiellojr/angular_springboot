import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemExclusaoSucesso: string;
  mensagemExclusaoErro: string;


  constructor(
    private service: ClientesService,
    private router : Router
  ) { }

  //listClientes() = getClientes() do video-aula
  //ngOnInit() = checkshowform do Delphi
  ngOnInit(): void {
    this.service
      .listClientes()
      .subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes/form'])
  }

  beforeExclusao(cliente : Cliente){
    this.clienteSelecionado = cliente;
  }
  
  excluirCliente(){
    this.service
      .excluir(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemExclusaoSucesso = 'Cliente '+ this.clienteSelecionado.nome + ' exlcuído com sucesso!'
          this.ngOnInit();//atualiza a lista
      },
        erro => this.mensagemExclusaoErro = 'Não é possível excluir, pois há serviços prestados com este cliente.'
      )
  }

  
}
