import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendamentoComponent } from './lista-agendamento.component';

describe('ListaAgendamentoComponent', () => {
  let component: ListaAgendamentoComponent;
  let fixture: ComponentFixture<ListaAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
