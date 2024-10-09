import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstanteriasComponent } from './card-estanterias.component';

describe('CardEstanteriasComponent', () => {
  let component: CardEstanteriasComponent;
  let fixture: ComponentFixture<CardEstanteriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEstanteriasComponent]
    });
    fixture = TestBed.createComponent(CardEstanteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
