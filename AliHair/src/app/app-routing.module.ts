import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component'; 
import { LoginComponent } from './pages/login/login.component'; 
import { ListaClientesComponent } from './pages/clientes/listar-cliente/listar-clientes.component';
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { CadastroSalaoComponent } from './salaos/cadastro-salao/cadastro-salao.component';
import { CardSalaoComponent } from './card-salao/card-salao.component';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  {path: 'listar-clientes', component: ListaClientesComponent},
  { path: 'clientes/novo', component: FormClienteComponent },
  { path: 'clientes/editar/:id', component: FormClienteComponent },
  {path: 'novo-salao', component: CadastroSalaoComponent},
  {path: 'card-salao', component: CardSalaoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
