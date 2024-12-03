import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../model/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiURL = 'http://localhost:8080/v1/agendamento'; 

  constructor(private http: HttpClient) {}

  // Criar agendamento
  criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }

  // Listar agendamentos
  listarAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiURL);
  }

  // Buscar agendamento por ID
  buscarAgendamentoPorId(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiURL}/${id}`);
  }

  // Atualizar agendamento
  atualizarAgendamento(id: number, agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.apiURL}/${id}`, agendamento);
  }

  // Deletar agendamento
  deletarAgendamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
