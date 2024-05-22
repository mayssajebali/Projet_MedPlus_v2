import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOrdonnanceComponent } from './from-ordonnance.component';

describe('FromOrdonnanceComponent', () => {
  let component: FromOrdonnanceComponent;
  let fixture: ComponentFixture<FromOrdonnanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromOrdonnanceComponent]
    });
    fixture = TestBed.createComponent(FromOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
