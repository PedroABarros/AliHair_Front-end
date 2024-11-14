import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSalaoComponent } from './card-salao.component';

describe('CardSalaoComponent', () => {
  let component: CardSalaoComponent;
  let fixture: ComponentFixture<CardSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSalaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
