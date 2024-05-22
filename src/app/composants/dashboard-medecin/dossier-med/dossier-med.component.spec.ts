import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierMedComponent } from './dossier-med.component';

describe('DossierMedComponent', () => {
  let component: DossierMedComponent;
  let fixture: ComponentFixture<DossierMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierMedComponent]
    });
    fixture = TestBed.createComponent(DossierMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
