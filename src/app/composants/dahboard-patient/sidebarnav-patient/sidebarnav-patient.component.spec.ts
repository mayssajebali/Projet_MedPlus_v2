import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarnavPatientComponent } from './sidebarnav-patient.component';

describe('SidebarnavPatientComponent', () => {
  let component: SidebarnavPatientComponent;
  let fixture: ComponentFixture<SidebarnavPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarnavPatientComponent]
    });
    fixture = TestBed.createComponent(SidebarnavPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
