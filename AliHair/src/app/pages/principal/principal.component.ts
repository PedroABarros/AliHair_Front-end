// principal.component.ts
import { Component, OnInit } from '@angular/core';
import { SalaoService } from '../../service/salao.service';
import { Salao } from '../../model/Salao';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  saloes: Salao[] = [];

  constructor(private salaoService: SalaoService) { }

  ngOnInit(): void {
    this.salaoService.listarSaloes().subscribe((data) => {
      this.saloes = data;
    });
  }
}
