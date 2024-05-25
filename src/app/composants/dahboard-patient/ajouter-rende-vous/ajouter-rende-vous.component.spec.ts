import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRendeVousComponent } from './ajouter-rende-vous.component';

describe('AjouterRendeVousComponent', () => {
  let component: AjouterRendeVousComponent;
  let fixture: ComponentFixture<AjouterRendeVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRendeVousComponent]
    });
    fixture = TestBed.createComponent(AjouterRendeVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
