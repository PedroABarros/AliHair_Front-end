import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../model/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiURL = 'http://localhost:8080/api/agendamentos'; // Certifique-se de que está na porta correta

  constructor(private http: HttpClient) {}

  criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }
}
