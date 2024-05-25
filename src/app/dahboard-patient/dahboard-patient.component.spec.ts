import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahboardPatientComponent } from './dahboard-patient.component';

describe('DahboardPatientComponent', () => {
  let component: DahboardPatientComponent;
  let fixture: ComponentFixture<DahboardPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DahboardPatientComponent]
    });
    fixture = TestBed.createComponent(DahboardPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
