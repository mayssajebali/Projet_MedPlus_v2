import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesSecretaireComponent } from './statistiques-secretaire.component';

describe('StatistiquesSecretaireComponent', () => {
  let component: StatistiquesSecretaireComponent;
  let fixture: ComponentFixture<StatistiquesSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesSecretaireComponent]
    });
    fixture = TestBed.createComponent(StatistiquesSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
