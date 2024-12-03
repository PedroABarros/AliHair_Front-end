import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListaClientesComponent } from './pages/clientes/listar-cliente/listar-clientes.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastroSalaoComponent } from './salaos/cadastro-salao/cadastro-salao.component';
import { CardSalaoComponent } from './card-salao/card-salao.component';
import { AgendarSalaoComponent } from './agendar-salao/agendar-salao.component';
import { ListagemSaloesComponent } from './salaos/listagem-saloes/listagem-saloes.component';
import { EditarSalaoComponent } from './salaos/editar-salao/editar-salao.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    ListaClientesComponent,
    FormClienteComponent,
    CadastroSalaoComponent,
    CardSalaoComponent,
    AgendarSalaoComponent,
    ListagemSaloesComponent,
    EditarSalaoComponent,
    ListaAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
