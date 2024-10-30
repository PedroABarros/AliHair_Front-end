
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../model/Cliente';
import { ClienteService } from '../../../service/Cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './listar-clientes.component.html',
   
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) { }

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
    this.router.navigate(['/clientes/novo']);
  }

  editarCliente(cliente: Cliente): void {
    this.router.navigate([`/clientes/editar/${cliente.id}`]);
  }
}