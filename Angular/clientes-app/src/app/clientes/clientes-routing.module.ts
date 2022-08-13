import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path : 'clientes', component: LayoutComponent,
    //#AULA112 - é como se fosse 'Sair' do sistem, tela do login
    canActivate: [AuthGuard],
    children:[
      // #AULA92 - http://localhost:4200/clientes/form
      {path : 'form', component: ClientesFormComponent},
      // #AULA92 - http://localhost:4200/clientes/form/[codigo que foi gerado pelo DB]
      {path : 'form/:codigoCliente', component: ClientesFormComponent},
      // #AULA92 - http://localhost:4200/clientes/lista
      {path : 'lista', component: ClientesListaComponent},
      {path : '', redirectTo : '/clientes/lista', pathMatch: 'full'}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
