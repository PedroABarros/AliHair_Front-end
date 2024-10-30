import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaClientesComponent } from './pages/clientes/listar-cliente/listar-clientes.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormClienteComponent } from './pages/clientes/form-cliente/form-cliente.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    ListaClientesComponent,
    FormClienteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
