import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path : 'servicos-prestados', component: LayoutComponent,
    //#AULA112 - é como se fosse 'Sair' do sistem, tela do login
    canActivate: [AuthGuard],
    children:[
      // #AULA92 - http://localhost:4200/servicos-prestados/form
      {path: 'form', component: ServicoPrestadoFormComponent},
      // #AULA92 - http://localhost:4200/servicos-prestados/lista
      {path: 'lista', component: ServicoPrestadoListaComponent},
      {path : '', redirectTo : '/servicos-prestados/lista', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
