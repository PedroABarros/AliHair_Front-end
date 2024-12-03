import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../service/agendamento.service';
import { Agendamento } from '../../model/Agendamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrls: ['./lista-agendamento.component.scss']
})
export class ListaAgendamentoComponent implements OnInit {
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService,   private router: Router) {
  
  }

  ngOnInit(): void {
    this.loadAgendamentos();
  }

  
  loadAgendamentos(): void {
    this.agendamentoService.getAgendamentos().subscribe({
      next: (data) => {
        this.agendamentos = data;
      },
      error: (error) => {
        console.error('Erro ao carregar os agendamentos:', error);
      }
    });
  }

  
  deleteAgendamento(id: number): void {
    this.agendamentoService.deleteAgendamento(id).subscribe({
      next: () => {
        console.log('Agendamento excluído com sucesso');
        this.loadAgendamentos(); 
      },
      error: (error) => {
        console.error('Erro ao excluir o agendamento:', error);
      }
    });
  }

  editarAgendamento(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/editar-agendamento', id]);
    }
  }
}
