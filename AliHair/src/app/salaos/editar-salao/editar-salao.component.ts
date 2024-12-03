import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaoService } from '../../service/salao.service';
import { Salao } from '../../model/Salao';

@Component({
  selector: 'app-editar-salao',
  templateUrl: './editar-salao.component.html',
  styleUrls: ['./editar-salao.component.scss']
})
export class EditarSalaoComponent implements OnInit {
  formSalao: FormGroup;
  mensagemErro: string = '';
  carregandoCep: boolean = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private salaoService: SalaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formSalao = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      servicos: ['', [Validators.required, Validators.maxLength(20)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)]]
    });

    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.salaoService.obterSalaoPorId(this.id).subscribe(
      (salao) => this.formSalao.patchValue(salao),
      (erro) => this.mensagemErro = erro.error?.message || 'Erro ao carregar salão'
    );
  }

  async buscarCep() {
    const cep = this.formSalao.get('cep')?.value?.replace(/\D/g, '');
    
    if (cep?.length !== 8) {
      return;
    }

    this.carregandoCep = true;
    
    try {
      const endereco = await this.salaoService.buscarCep(cep).toPromise();
      if (endereco) {
        this.formSalao.patchValue({
          logradouro: endereco.logradouro,
          bairro: endereco.bairro,
          cidade: endereco.localidade,
          estado: endereco.uf
        });
      }
    } catch (erro) {
      this.mensagemErro = 'CEP não encontrado';
    } finally {
      this.carregandoCep = false;
    }
  }

  async onSubmit() {
    if (this.formSalao.valid) {
      try {
        const salao = this.formSalao.value;
        await this.salaoService.atualizarSalao(this.id, salao).toPromise();
        alert('Salão atualizado com sucesso!');
        this.router.navigate(['/saloes']); // Redireciona para a lista de salões
      } catch (erro: any) {
        this.mensagemErro = erro.error?.message || 'Erro ao atualizar salão';
      }
    } else {
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente';
      Object.keys(this.formSalao.controls).forEach(campo => {
        const controle = this.formSalao.get(campo);
        if (controle?.invalid) {
          controle.markAsTouched();
        }
      });
    }
  }

  mascaraTelefone(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    event.target.value = valor;
  }

  mascaraCnpj(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
    valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    event.target.value = valor;
  }

  mascaraCep(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
    event.target.value = valor;
  }
}

