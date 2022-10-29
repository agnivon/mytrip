import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchPageComponent } from './bus-search-page.component';

describe('BusSearchPageComponent', () => {
  let component: BusSearchPageComponent;
  let fixture: ComponentFixture<BusSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
