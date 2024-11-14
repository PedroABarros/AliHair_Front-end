import { Component, EventEmitter, Output } from '@angular/core';
import { AgendamentoService } from '../service/agendamento.service';

@Component({
  selector: 'app-agendar-salao',
  templateUrl: './agendar-salao.component.html',
  styleUrls: ['./agendar-salao.component.scss']
})
export class AgendarSalaoComponent {
  @Output() close = new EventEmitter<void>();

  agendamento = {
    nome: '',
    data: '',
    hora: '',
    descricao: ''
  };

  constructor(private agendamentoService: AgendamentoService) {}

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    this.agendamentoService.criarAgendamento(this.agendamento)
      .subscribe(response => {
        console.log('Agendamento criado com sucesso:', response);
        this.closeModal();
      }, error => {
        console.error('Erro ao criar agendamento:', error);
      });
  }
}
