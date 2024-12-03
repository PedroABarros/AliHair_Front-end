import { Component, OnInit } from '@angular/core';
import { SalaoService } from '../../service/salao.service';
import { Salao } from '../../model/Salao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-saloes',
  templateUrl: './listagem-saloes.component.html',
  styleUrls: ['./listagem-saloes.component.scss'],
})
export class ListagemSaloesComponent implements OnInit {
  saloes: Salao[] = [];
  mensagemErro: string = '';

  constructor(private salaoService: SalaoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarSaloes();
  }

  carregarSaloes() {
    this.salaoService.listarSaloes().subscribe(
      (saloes) => (this.saloes = saloes),
      (erro) => (this.mensagemErro = erro.error?.message || 'Erro ao carregar salões')
    );
  }

  excluirSalao(id: number) {
    if (confirm('Tem certeza que deseja excluir este salão?')) {
      this.salaoService.excluirSalao(id).subscribe(
        () => {
          this.mensagemErro = '';
          this.carregarSaloes();
        },
        (erro) => (this.mensagemErro = erro.error?.message || 'Erro ao excluir salão')
      );
    }
  }

  editarSalao(id: number) {
    this.router.navigate(['/editar-salao', id]);
  }
}
