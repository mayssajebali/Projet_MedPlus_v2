import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCertificatComponent } from './ajouter-certificat.component';

describe('AjouterCertificatComponent', () => {
  let component: AjouterCertificatComponent;
  let fixture: ComponentFixture<AjouterCertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCertificatComponent]
    });
    fixture = TestBed.createComponent(AjouterCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
