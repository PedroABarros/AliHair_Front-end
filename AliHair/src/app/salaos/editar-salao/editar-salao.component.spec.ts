import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalaoComponent } from './editar-salao.component';

describe('EditarSalaoComponent', () => {
  let component: EditarSalaoComponent;
  let fixture: ComponentFixture<EditarSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSalaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
