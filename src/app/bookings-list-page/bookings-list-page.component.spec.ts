import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsListPageComponent } from './bookings-list-page.component';

describe('BookingsListPageComponent', () => {
  let component: BookingsListPageComponent;
  let fixture: ComponentFixture<BookingsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
