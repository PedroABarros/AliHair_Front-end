import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component'; // ajuste o caminho conforme necessário
import { LoginComponent } from './login/login.component'; // ajuste o caminho conforme necessário

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, // Redireciona para a página de login ao acessar a raiz
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  // Adicione outras rotas aqui, se necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
