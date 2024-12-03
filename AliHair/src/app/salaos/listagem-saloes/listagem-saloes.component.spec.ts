import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSaloesComponent } from './listagem-saloes.component';

describe('ListagemSaloesComponent', () => {
  let component: ListagemSaloesComponent;
  let fixture: ComponentFixture<ListagemSaloesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemSaloesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemSaloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
