import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../service/Cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../model/Cliente';
import { CustomValidators } from '../../../../CustomValidators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.scss'
})
export class FormClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  isEdicao = false;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.clienteForm = this.formBuilder.group({
      id: [0],
      nome: ['', [
        Validators.required,
        CustomValidators.nomeCompleto
      ]],
      telefone: ['', [
        Validators.required,
        CustomValidators.telefoneValidator
      ]],
      email: ['', [
        Validators.required,
        CustomValidators.emailValidator
      ]],
      cpf: ['', [
        Validators.required,
        CustomValidators.validaCPF
      ]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdicao = true;
      this.loading = true;
      this.clienteService.buscarClientePorId(id).pipe(
        finalize(() => this.loading = false)
      ).subscribe({
        next: (cliente) => {
          this.clienteForm.patchValue(cliente);
        },
        error: (error) => {
          console.error('Erro ao carregar cliente:', error);
          this.handleError(error);
        }
      });
    }
  }

  salvar(): void {
    this.submitted = true;

    if (this.clienteForm.invalid) {
      this.markFormGroupTouched(this.clienteForm);
      return;
    }

    const cliente: Cliente = this.clienteForm.value;
    this.loading = true;

    const operation = this.isEdicao
      ? this.clienteService.atualizarCliente(cliente.id, cliente)
      : this.clienteService.salvarCliente(cliente);

    operation.pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: () => {
        const message = this.isEdicao
          ? 'Cliente atualizado com sucesso!'
          : 'Cliente cadastrado com sucesso!';
        alert(message);
        this.router.navigate(['listar-clientes']);
      },
      error: (error) => {
        console.error('Erro ao salvar cliente:', error);
        this.handleError(error);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['listar-clientes']);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  private handleError(error: any): void {
    if (error.error?.message) {
      alert(error.error.message);
    } else {
      alert('Ocorreu um erro. Por favor, tente novamente.');
    }
  }

  // Getters para facilitar acesso no template
  get nome() { return this.clienteForm.get('nome'); }
  get telefone() { return this.clienteForm.get('telefone'); }
  get email() { return this.clienteForm.get('email'); }
  get cpf() { return this.clienteForm.get('cpf'); }
}