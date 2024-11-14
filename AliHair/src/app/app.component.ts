import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AliHair';
  isModalOpen = false;
  saloes = [ 
    // Adicione aqui dados de exemplo para os salões
    { nome: 'Salão XYZ', logradouro: 'Rua A', bairro: 'Bairro B', cidade: 'Cidade C', estado: 'Estado D', servicos: 'Corte, Coloração', preco: 50 },
    // Outros salões...
  ];

  openModal() {
    console.log('Abrir modal chamado no AppComponent');
    this.isModalOpen = true;
  }

  closeModal() {
    console.log('Fechar modal chamado no AppComponent');
    this.isModalOpen = false;
  }
}
