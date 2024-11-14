import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-salao',
  templateUrl: './card-salao.component.html',
  styleUrls: ['./card-salao.component.scss']
})
export class CardSalaoComponent {
  @Input() salao: any;
  @Output() agendarSalao = new EventEmitter<void>();

  agendar() {
    console.log('Agendar botão clicado no CardSalaoComponent');
    this.agendarSalao.emit();
  }
}
