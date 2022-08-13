import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  //AULA89 - http://localhost:4200/login
  {path : 'login', component: LoginComponent },
  //AULA91 - http://localhost:4200/ 
  {path : '', component: LayoutComponent, 
   children: [
      //AULA53 - http://localhost:4200/home
      { path : 'home', component: HomeComponent, 
        //#AULA112 - é como se fosse 'Sair' do sistema, tela do login
        canActivate : [AuthGuard] 
      },
      {path : '' , redirectTo: '/home', pathMatch: 'full'}
   ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
