import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillonesComponent } from './sillones.component';

describe('SillonesComponent', () => {
  let component: SillonesComponent;
  let fixture: ComponentFixture<SillonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SillonesComponent]
    });
    fixture = TestBed.createComponent(SillonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
