//#AULA81 - importado automaticamente através do terminal usando ng g s --skipTests=true servicoPrestado

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBASE + '/api/servicos-prestados';

  constructor( private http: HttpClient ) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  // Error: src/app/servico-prestado/servico-prestado-lista/servico-prestado-lista.component.ts:30:30 - error TS2322: Type 'ServicoPrestadoBusca' is not assignable to type 'ServicoPrestadoBusca[]'.
  //   30       .subscribe(response => this.lista = response);
  // *************** é por que a classe ServicoPrestadoBusca estava como objeto e não como array "[]"
  buscar(nomeCliente: string, mes: number) : Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams()
      .set("nome", nomeCliente)
      .set("mes", mes ? mes.toString() : '');

    // http://localhost:8080/api/servicos-prestados?nome=Junior&mes=6
    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  listarAllServicos() : Observable<ServicoPrestadoBusca[]>{
    return this.http.get<ServicoPrestadoBusca[]>(`${this.apiURL}`);
  }

}
