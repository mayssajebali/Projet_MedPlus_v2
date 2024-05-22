import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMedicalComponent } from './historique-medical.component';

describe('HistoriqueMedicalComponent', () => {
  let component: HistoriqueMedicalComponent;
  let fixture: ComponentFixture<HistoriqueMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueMedicalComponent]
    });
    fixture = TestBed.createComponent(HistoriqueMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
