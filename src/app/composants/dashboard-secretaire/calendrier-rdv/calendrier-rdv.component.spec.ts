import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierRDVComponent } from './calendrier-rdv.component';

describe('CalendrierRDVComponent', () => {
  let component: CalendrierRDVComponent;
  let fixture: ComponentFixture<CalendrierRDVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierRDVComponent]
    });
    fixture = TestBed.createComponent(CalendrierRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
