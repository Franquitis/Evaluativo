import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutoComponent } from './puto.component';

describe('PutoComponent', () => {
  let component: PutoComponent;
  let fixture: ComponentFixture<PutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutoComponent]
    });
    fixture = TestBed.createComponent(PutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
