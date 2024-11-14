import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:8080/v1/clientes';
  private loggedInCliente: Cliente | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<Cliente | null> {
    return this.http.post<Cliente>(`${this.apiURL}/login`, { email, senha }).pipe(
      tap(cliente => {
        this.loggedInCliente = cliente;
      }),
      catchError(() => of(null))
    );
  }

  getLoggedInCliente(): Cliente | null {
    return this.loggedInCliente;
  }

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, cliente);
  }
}
