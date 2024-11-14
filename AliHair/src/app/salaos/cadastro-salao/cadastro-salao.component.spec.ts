import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSalaoComponent } from './cadastro-salao.component';

describe('CadastroSalaoComponent', () => {
  let component: CadastroSalaoComponent;
  let fixture: ComponentFixture<CadastroSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroSalaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
