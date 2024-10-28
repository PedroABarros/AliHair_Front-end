import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  cartoes = [
    { id: 1, titulo: 'Cartão 1', descricao: 'Descrição do Cartão 1' },
    { id: 2, titulo: 'Cartão 2', descricao: 'Descrição do Cartão 2' },
    { id: 3, titulo: 'Cartão 3', descricao: 'Descrição do Cartão 3' },
  ];

  ngOnInit(): void {
    // Qualquer lógica adicional que desejar no OnInit
  }
}
