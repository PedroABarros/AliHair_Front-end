import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-salao',
  templateUrl: './card-salao.component.html',
  styleUrls: ['./card-salao.component.scss']
})
export class CardSalaoComponent {
  @Input() salao: any;
}