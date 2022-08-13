import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBASE + '/api/clientes';

  constructor(private http: HttpClient) {
    
  }

  // salvar os novos clientes
  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}` , cliente);
  }
 
  // modificar ou alterar os dados
  atualizar(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.codigoCliente}`, cliente);
  }
  
  //listar os clientes
  listClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiURL);
  }
  
  //buscar do DB, o cliente quando clica no botão Editar no clientes-lista
  getClientesByCodigo(codigoCliente: number) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${codigoCliente}`);
  }
  
  //apagar o cliente do DB
  excluir(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.codigoCliente}`);
  }
  
  //AULA60 - carregar o cliente quando abre a tela, como se fosse checkshowform do Delphi
//   getCliente() : Cliente[] {
//     let cliente = new Cliente();
//     cliente.codigoCliente = 1;
//     cliente.nome = 'Junior';
//     cliente.cpf = '92423723075';
//     cliente.dataCadastro = '28/05/2021';    
//     return [cliente];
//   }
}
