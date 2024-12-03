import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarSalaoComponent } from './agendar-salao.component';

describe('AgendarSalaoComponent', () => {
  let component: AgendarSalaoComponent;
  let fixture: ComponentFixture<AgendarSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarSalaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
