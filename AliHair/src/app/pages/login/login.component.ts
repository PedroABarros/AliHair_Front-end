import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (cliente) => {
        this.loading = false;
        if (cliente) {
          alert(`Bem-vindo, ${cliente.nome}!`);
          this.router.navigate(['/principal']);
        } else {
          this.errorMessage = 'Email ou senha incorretos';
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Erro ao tentar fazer login';
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/clientes/novo']);
  }
}
