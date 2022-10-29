import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Output, EventEmitter } from '@angular/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as moment from 'moment';
import { BusSearchParams } from '../models/bus.model';
// tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment } from 'moment';

// const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-bus-search-form',
  templateUrl: './bus-search-form.component.html',
  styleUrls: ['./bus-search-form.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class BusSearchFormComponent implements OnInit {

  currentDate: moment.Moment = moment();

  busSearchForm = this.fb.group({
    source: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    startDate: [null, [Validators.required]],
  });

  places: string[] = ['Bengaluru', 'Chennai', 'Mumbai', 'Jaipur'];
  sources: string[] = this.places.concat();
  destinations: string[] = this.places.concat();

  @Output() formSubmitEvent = new EventEmitter<BusSearchParams>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.busSearchForm.controls['source'].valueChanges.subscribe(value => {
      this.destinations = this.places.filter(d => d != value);
      if (this.destination.value == value) {
        this.destination.setValue(undefined);
      }
    });
  }

  get source(): AbstractControl {
    return this.busSearchForm.get('source')!;
  }

  get destination(): AbstractControl {
    return this.busSearchForm.get('destination')!;
  }

  get startDate(): AbstractControl {
    return this.busSearchForm.get('startDate')!;
  }

  onSubmit() {
    if (this.busSearchForm.valid) {
      const formData = this.busSearchForm.value;
      this.formSubmitEvent.emit({
        source: formData.source!,
        destination: formData.destination!,
        startDate: formData.startDate!
      });
    }
  }
}
