import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component'; 
import { LoginComponent } from './pages/login/login.component'; 
import { ListaClientesComponent } from './pages/clientes/listar-cliente/listar-clientes.component';
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { CadastroSalaoComponent } from './salaos/cadastro-salao/cadastro-salao.component';
import { CardSalaoComponent } from './card-salao/card-salao.component';
import { ListagemSaloesComponent } from './salaos/listagem-saloes/listagem-saloes.component';
import { EditarSalaoComponent } from './salaos/editar-salao/editar-salao.component';
import { ListaAgendamentoComponent} from './agendamento/lista-agendamento/lista-agendamento.component';  
import { AgendarSalaoComponent } from './agendamento/agendar-salao/agendar-salao.component';  
import { ListarAgendamentosUsuarioComponent } from './agendamento/listar-agendamentos-usuario/listar-agendamentos-usuario.component';
import { EditarAgendamentoComponent } from './agendamento/editar-agendamento/editar-agendamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'listar-clientes', component: ListaClientesComponent },
  { path: 'clientes/novo', component: FormClienteComponent },
  { path: 'clientes/editar/:id', component: FormClienteComponent },
  { path: 'novo-salao', component: CadastroSalaoComponent },
  { path: 'card-salao', component: CardSalaoComponent },
  { path: 'listar-saloes', component: ListagemSaloesComponent },
  { path: 'editar-salao/:id', component: EditarSalaoComponent },
  { path: 'listar-agendamento', component: ListaAgendamentoComponent },
  { path: 'listar-agendamentos', component: ListarAgendamentosUsuarioComponent },
  {path: 'editar-agendamento/:id', component: EditarAgendamentoComponent},
  { path: 'agendar-salao', component: AgendarSalaoComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
