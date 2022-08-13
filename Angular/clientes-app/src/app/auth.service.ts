//#AULA103

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBASE + '/api/usuarios';
  tokenURL: string = environment.apiURLBASE + environment.getTokenUrl;
  clientCodigo: string = environment.clientCodigo;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(
    private http: HttpClient
  ) {}

  getToken(){
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  exitSession(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.getToken();
    if (token) {
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user;
    }
    return null;
  }




  // se retorna false, não vai abrir o sistema(site)
  // só vai abrir a tela do login
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  // salvar os novos usuarios
  salvarUsuario(usuario : Usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  beforeLogon( username: string, password: string ) : Observable<any> {
    //pegando do postman, POST, http://localhost:8080/oauth/token > body > x-wwww-form-urlencoded
    const params = new HttpParams()
                        .set('username', username)
                        .set('password', password)
                        .set('grant_type', 'password');

    //pegando do postman, POST, http://localhost:8080/oauth/token > Headers
    const headers ={
      'Authorization' : 'Basic ' + btoa(`${this.clientCodigo}:${this.clientSecret}`),
      'Content-Type'  : 'application/x-www-form-urlencoded'
    }
                        
    return this.http.post( this.tokenURL, params.toString(), { headers })

  }
}
