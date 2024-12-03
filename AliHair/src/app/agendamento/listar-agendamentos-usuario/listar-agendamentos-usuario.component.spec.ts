import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendamentosUsuarioComponent } from './listar-agendamentos-usuario.component';

describe('ListarAgendamentosUsuarioComponent', () => {
  let component: ListarAgendamentosUsuarioComponent;
  let fixture: ComponentFixture<ListarAgendamentosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAgendamentosUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAgendamentosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
