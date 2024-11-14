// salao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salao } from '../model/Salao';

interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalaoService {
  private apiUrl = 'http://localhost:8080/v1/salao';
 
  
  constructor(private http: HttpClient) { }
  listarSaloes(): Observable<Salao[]> {
    return this.http.get<Salao[]>(this.apiUrl);
  }

  cadastrar(salao: any): Observable<any> {
    return this.http.post(this.apiUrl, salao);
  }

  buscarCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}