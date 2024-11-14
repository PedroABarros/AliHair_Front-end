import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:8080/v1/clientes';

  constructor(private http: HttpClient) {}

  
  login(email: string, senha: string): Observable<Cliente | null> {
    return this.http.get<Cliente[]>(this.apiURL).pipe(
      map((clientes: Cliente[]) => {
        const cliente = clientes.find(cli => cli.email === email);
        if (cliente && cliente.cpf === senha) { 
          return cliente;
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }
}
