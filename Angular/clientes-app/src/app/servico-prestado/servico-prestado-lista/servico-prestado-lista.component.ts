import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from '../../servico-prestado.service';
// import { Router } from '@angular/router';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nomeCliente: string;
  mes: number;
  meses: number[];
  listaServico: ServicoPrestadoBusca[];
  servico: ServicoPrestado[] = [];
  message: string;

  constructor(
    private service: ServicoPrestadoService,
    // private router : Router
  ) {
    this.meses = [1,2,3,4,5,6,6,7,8,9,10,11,12]
  }
  
  //ngOnInit() = checkshowform do Delphi
  ngOnInit(): void {
    this.listarAll();
  }

  consultarClientes(){
    // console.log();
    this.service
      .buscar(this.nomeCliente, this.mes)
      .subscribe(response => {
        this.listaServico = response;
        if (this.listaServico.length <= 0) {
          this.message = "Nenhum registro encontrado.";
        } else {
          this.message = '';
        }
      });
  }

  // novoServico() {
  //   this.router.navigate(['/servico-prestado-form'])
  // }

  listarAll(){
      this.service
      .listarAllServicos()
      .subscribe(resposta => {
        this.listaServico = resposta;
        this.message = '';
      });
  }


}