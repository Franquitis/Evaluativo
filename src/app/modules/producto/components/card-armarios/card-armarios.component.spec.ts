import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArmariosComponent } from './card-armarios.component';

describe('CardArmariosComponent', () => {
  let component: CardArmariosComponent;
  let fixture: ComponentFixture<CardArmariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardArmariosComponent]
    });
    fixture = TestBed.createComponent(CardArmariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
