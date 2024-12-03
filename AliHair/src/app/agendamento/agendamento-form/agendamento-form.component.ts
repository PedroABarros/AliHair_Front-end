import { Component, OnInit, Input } from '@angular/core';
import { AgendamentoService } from '../../service/agendamento.service';
import { Agendamento } from '../../model/Agendamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.scss']
})
export class AgendamentoFormComponent implements OnInit {
  @Input() agendamento: Agendamento = {
    idCliente: 0,
    nomeCliente: '',
    idSalao: 0,
    diaAgendamento: '',
    horarioAgendamento: '',
    descricao: ''
  };
  isEditMode = false;

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.agendamentoService.getAgendamento(+id).subscribe({
        next: (data) => {
          this.agendamento = data;
        },
        error: (error) => {
          console.error('Erro ao carregar o agendamento:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      
      if (!this.agendamento.id) {
        console.error('O id do agendamento não foi encontrado');
        return;
      }

      this.agendamentoService.atualizarAgendamento(this.agendamento.id, this.agendamento)
        .subscribe({
          next: () => {
            console.log('Agendamento atualizado com sucesso');
            this.router.navigate(['/lista-agendamento']);
          },
          error: (error) => {
            console.error('Erro ao atualizar agendamento:', error);
          }
        });
    } else {
      this.agendamentoService.criarAgendamento(this.agendamento)
        .subscribe({
          next: () => {
            console.log('Agendamento criado com sucesso');
            this.router.navigate(['/lista-agendamento']);
          },
          error: (error) => {
            console.error('Erro ao criar agendamento:', error);
          }
        });
    }
  }
}
