import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSillonesComponent } from './card-sillones.component';

describe('CardSillonesComponent', () => {
  let component: CardSillonesComponent;
  let fixture: ComponentFixture<CardSillonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSillonesComponent]
    });
    fixture = TestBed.createComponent(CardSillonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
