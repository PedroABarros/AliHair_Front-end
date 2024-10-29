import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component'; 
import { LoginComponent } from './login/login.component'; 
import { ListaClientesComponent } from './pages/listar-clientes/listar-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  {path: 'listar-clientes', component: ListaClientesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
