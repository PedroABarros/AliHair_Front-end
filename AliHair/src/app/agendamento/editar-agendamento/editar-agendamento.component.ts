import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendamentoService } from '../../service/agendamento.service';
import { AuthService } from '../../service/Auth.service';
import { Agendamento } from '../../model/Agendamento';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.scss']
})
export class EditarAgendamentoComponent implements OnInit {
  formAgendamento: FormGroup;
  id: number | null = null;
  nomeCliente: string = '';

  constructor(
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formAgendamento = this.fb.group({
      idCliente: [{ value: '', disabled: true }, Validators.required],
      nomeCliente: [{ value: '', disabled: true }, Validators.required],
      idSalao: ['', Validators.required],
      diaAgendamento: ['', Validators.required],
      horarioAgendamento: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const cliente = this.authService.getLoggedInCliente();
    if (cliente) {
      this.nomeCliente = cliente.nome;
      this.formAgendamento.patchValue({
        idCliente: cliente.id,
        nomeCliente: cliente.nome
      });
    }

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.agendamentoService.getAgendamento(this.id).subscribe(
        (data) => {
          this.formAgendamento.patchValue(data);
        },
        (error) => {
          console.error('Erro ao carregar agendamento', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.formAgendamento.valid && this.id) {
      this.agendamentoService.atualizarAgendamento(this.id, this.formAgendamento.getRawValue()).subscribe(
        () => {
          alert('Agendamento atualizado com sucesso!');
          this.router.navigate(['/listar-agendamento']);
        },
        (error) => {
          console.error('Erro ao atualizar agendamento', error);
          alert('Erro ao atualizar agendamento.');
        }
      );
    }
  }
}
