import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#AULA78 - Criando o módulo e os componentes de servico prestado. importar o FormsModule!!!
import { FormsModule } from '@angular/forms'

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
//#AULA78 - Criando o módulo e os componentes de servico prestado. importar o RouterModule!
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent, 
    ServicoPrestadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    //#AULA78 - Criando o módulo e os componentes de servico prestado. colocar os dois de abaixo!!!
    FormsModule,
    RouterModule
  ],
  //#AULA78 - Criando o módulo e os componentes de servico prestado. colocar os exports abaixo!!!
  exports: [
    ServicoPrestadoFormComponent, 
    ServicoPrestadoListaComponent
  ]

})
export class ServicoPrestadoModule { }
