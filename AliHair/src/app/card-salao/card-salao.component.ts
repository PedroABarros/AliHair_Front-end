import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-salao',
  templateUrl: './card-salao.component.html',
  styleUrls: ['./card-salao.component.scss']
})
export class CardSalaoComponent {
  @Input() salao: any;
  @Output() agendarSalao = new EventEmitter<void>();
  isModalOpen = false;

  agendar() { this.openModal();}
  openModal() {
    console.log('Abrir modal chamado no AppComponent');
    this.isModalOpen = true;
  }

  closeModal() {
    console.log('Fechar modal chamado no AppComponent');
    this.isModalOpen = false;
  }
}
