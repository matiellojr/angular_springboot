import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSuccess: string;
  errors: String[];
  


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService
          .beforeLogon(this.username, this.password)
          .subscribe(
            response => {
            const access_token = JSON.stringify(response);
            localStorage.setItem('access_token', access_token);
            this.router.navigate(['/home']);
          }, 
            errorResponse => {
              this.errors = ['Usuário e/ou senha incorreto(s).']
            })
  }

  prepararCadastro(){
    // event como parametro
    // event.preventDefault();
    this.cadastrando = true;
  }
  
  cancelarCadastro(){
    // event.preventDefault();
    this.cadastrando = false;
  }
  
  //#AULA103
  cadastrarUsuario(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;

    this.authService
        .salvarUsuario(usuario)
        .subscribe(
          success => {
            this.mensagemSuccess = "Cadastro realizado com suceeso! Efetue o login."
            this.cadastrando = false;
            this.username = '';
            this.password = '';
            this.errors = [];
          }, errorResponse => {
            // errorResponse.error.errors vem do spring boot package com.example.juniorm.clientes.rest.exception.ApiErrors
            this.errors = errorResponse.error.errors;
          }
        )
  }

}
