import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPatientComponent } from './discussion-patient.component';

describe('DiscussionPatientComponent', () => {
  let component: DiscussionPatientComponent;
  let fixture: ComponentFixture<DiscussionPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionPatientComponent]
    });
    fixture = TestBed.createComponent(DiscussionPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
