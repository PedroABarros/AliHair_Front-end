
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = 'http://localhost:8080/v1/clientes'; 

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  buscarClientePorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, cliente);
  }

  atualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiURL}/${id}`, cliente);
  }

  excluirCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}