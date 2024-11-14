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
