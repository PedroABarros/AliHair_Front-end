
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { ClienteService } from '../../service/Cliente.service';

@Component({
  selector: 'app-lista-clientes',
  template: `
    <div class="container mt-4">
      <h2>Lista de Clientes</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let cliente of clientes">
            <td>{{cliente.id}}</td>
            <td>{{cliente.nome}}</td>
            <td>
              <button class="btn btn-info me-2" (click)="editarCliente(cliente)">Editar</button>
              <button class="btn btn-danger" *ngIf="cliente.id" (click)="excluirCliente(cliente.id!)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" (click)="novoCliente()">Novo Cliente</button>
    </div>
  `
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.listarClientes()
      .subscribe(
        data => this.clientes = data,
        error => console.error('Erro ao carregar clientes:', error)
      );
  }

  excluirCliente(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('Tem certeza que deseja excluir este cliente?')) {
        this.clienteService.excluirCliente(id)
          .subscribe(
            () => this.carregarClientes(),
            error => console.error('Erro ao excluir cliente:', error)
          );
      }
    }
  }

  novoCliente(): void {
  
  }

  editarCliente(cliente: Cliente): void {
   
  }
}