import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteriasComponent } from './estanterias.component';

describe('EstanteriasComponent', () => {
  let component: EstanteriasComponent;
  let fixture: ComponentFixture<EstanteriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstanteriasComponent]
    });
    fixture = TestBed.createComponent(EstanteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
