import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCompteSecretaireComponent } from './creer-compte-secretaire.component';

describe('CreerCompteSecretaireComponent', () => {
  let component: CreerCompteSecretaireComponent;
  let fixture: ComponentFixture<CreerCompteSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerCompteSecretaireComponent]
    });
    fixture = TestBed.createComponent(CreerCompteSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
