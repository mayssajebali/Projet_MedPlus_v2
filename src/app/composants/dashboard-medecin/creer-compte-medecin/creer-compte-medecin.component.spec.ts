import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCompteMedecinComponent } from './creer-compte-medecin.component';

describe('CreerCompteMedecinComponent', () => {
  let component: CreerCompteMedecinComponent;
  let fixture: ComponentFixture<CreerCompteMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerCompteMedecinComponent]
    });
    fixture = TestBed.createComponent(CreerCompteMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
