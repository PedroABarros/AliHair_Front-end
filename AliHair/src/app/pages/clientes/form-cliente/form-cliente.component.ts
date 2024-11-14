import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../service/Cliente.service';
import { AuthService } from '../../../service/Auth.service';
import { finalize } from 'rxjs/operators';
import { CustomValidators } from '../../../../CustomValidators';
import { Cliente } from '../../../model/Cliente';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  isEdicao = false;
  loading = false;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private authService: AuthService,
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
      ]],
      senha: ['', [
        Validators.required,
        Validators.minLength(6)
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
        this.authService.login(cliente.email, cliente.senha).subscribe({
          next: (authCliente) => {
            if (authCliente) {
              alert(`Bem-vindo, ${authCliente.nome}!`);
              this.router.navigate(['/dashboard']);
            } else {
              this.errorMessage = 'Erro ao tentar fazer login';
            }
          },
          error: () => {
            this.errorMessage = 'Erro ao tentar fazer login';
          }
        });
      },
      error: (error) => {
        console.error('Erro ao salvar cliente:', error);
        this.handleError(error);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['principal']);
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

  get nome() { return this.clienteForm.get('nome'); }
  get telefone() { return this.clienteForm.get('telefone'); }
  get email() { return this.clienteForm.get('email'); }
  get cpf() { return this.clienteForm.get('cpf'); }
  get senha() { return this.clienteForm.get('senha'); }
}
