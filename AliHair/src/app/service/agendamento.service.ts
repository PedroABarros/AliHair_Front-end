import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../model/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiURL = 'http://localhost:8080/v1/agendamento'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  // Método para obter todos os agendamentos
  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiURL);
  }

  // Método para obter um agendamento por id
  getAgendamento(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiURL}/${id}`);
  }

  // Método para criar um novo agendamento
  criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }

  // Método para atualizar um agendamento
  atualizarAgendamento(id: number, agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.apiURL}/${id}`, agendamento);
  }

  // Método para excluir um agendamento
  deleteAgendamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  // Método para obter agendamentos por cliente
  getAgendamentosByCliente(idCliente: number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.apiURL}/cliente/${idCliente}`);
  }
}
