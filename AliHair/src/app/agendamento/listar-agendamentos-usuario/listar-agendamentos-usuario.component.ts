import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoService } from '../../service/agendamento.service';
import { AuthService } from '../../service/Auth.service';
import { Agendamento } from '../../model/Agendamento';

@Component({
  selector: 'app-listar-agendamentos-usuario',
  templateUrl: './listar-agendamentos-usuario.component.html',
  styleUrls: ['./listar-agendamentos-usuario.component.scss']
})
export class ListarAgendamentosUsuarioComponent implements OnInit {
  agendamentos: Agendamento[] = [];

  constructor(
    private agendamentoService: AgendamentoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const cliente = this.authService.getLoggedInCliente();
    if (cliente) {
      this.carregarAgendamentos(cliente.id);
    }
  }

  carregarAgendamentos(idCliente: number) {
    this.agendamentoService.getAgendamentosByCliente(idCliente).subscribe(
      (data) => {
        this.agendamentos = data;
      },
      (error) => {
        console.error('Erro ao carregar agendamentos', error);
      }
    );
  }

  excluirAgendamento(id: number | undefined) {
    if (id !== undefined) {
      const cliente = this.authService.getLoggedInCliente();
      if (cliente) {
        this.agendamentoService.deleteAgendamento(id).subscribe(
          () => {
            this.carregarAgendamentos(cliente.id);  
          },
          (error) => {
            console.error('Erro ao excluir agendamento', error);
          }
        );
      }
    }
  }

  editarAgendamento(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/editar-agendamento/:id', id]);
    }
  }
}
