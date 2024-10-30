import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static nomeCompleto(control: AbstractControl): ValidationErrors | null {
    const nome = control.value;
    if (!nome) return null;
    
    const nomeArray = nome.trim().split(' ');
    if (nomeArray.length < 2) {
      return { nomeIncompleto: 'Digite o nome completo' };
    }
    
    if (nome.length < 10) {
      return { nomeMinLength: 'Nome muito curto' };
    }
    
    return null;
  }

  static telefoneValidator(control: AbstractControl): ValidationErrors | null {
    const telefone = control.value;
    if (!telefone) return null;
    
    const numeroLimpo = telefone.replace(/\D/g, '');
    if (numeroLimpo.length !== 11) {
      return { telefoneInvalido: 'Telefone deve ter 11 dígitos' };
    }
    
    return null;
  }

  static validaCPF(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value?.replace(/\D/g, '');
    
    if (!cpf) return null;
    
    // Validações iniciais
    if (cpf.length !== 11) return { cpfInvalido: 'CPF deve ter 11 dígitos' };
    
    // Verificar por números repetidos
    if (/^(\d)\1+$/.test(cpf)) return { cpfInvalido: 'CPF inválido' };
    
    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
      return { cpfInvalido: 'CPF inválido' };
    }
    
    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
      return { cpfInvalido: 'CPF inválido' };
    }
    
    return null;
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (!email) return null;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { emailInvalido: 'Formato de email inválido' };
    }
    
    return null;
  }
}