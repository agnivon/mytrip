import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingPageComponent } from './bus-booking-page.component';

describe('BusBookingPageComponent', () => {
  let component: BusBookingPageComponent;
  let fixture: ComponentFixture<BusBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
