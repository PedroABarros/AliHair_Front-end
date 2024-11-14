import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { AgendamentoService } from '../service/agendamento.service';
import { AuthService } from '../service/Auth.service';
import { Agendamento } from '../model/Agendamento';

@Component({
  selector: 'app-agendar-salao',
  templateUrl: './agendar-salao.component.html',
  styleUrls: ['./agendar-salao.component.scss']
})
export class AgendarSalaoComponent implements OnInit {
  @Input() idSalao: number = 0;
  @Output() close = new EventEmitter<void>();

  agendamento: Agendamento = {
    nomeCliente: '',
    idSalao: 0,
    diaAgendamento: '',
    horarioAgendamento: '',
    descricao: ''
  };

  constructor(
    private agendamentoService: AgendamentoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const cliente = this.authService.getLoggedInCliente();
    if (cliente) {
      this.agendamento.nomeCliente = cliente.nome;
    }

    this.agendamento.idSalao = this.idSalao;
  }

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
