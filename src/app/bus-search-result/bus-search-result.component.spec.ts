import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSearchResultComponent } from './bus-search-result.component';

describe('BusSearchResultComponent', () => {
  let component: BusSearchResultComponent;
  let fixture: ComponentFixture<BusSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
