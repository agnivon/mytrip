import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PassengerInfo } from '../models/bus.model';

@Component({
  selector: 'app-bus-booking-form',
  templateUrl: './bus-booking-form.component.html',
  styleUrls: ['./bus-booking-form.component.css']
})
export class BusBookingFormComponent implements OnInit {

  passengerInfoForm = this.fb.group({
    username: ['', [Validators.required]],
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]]
  })

  formInputChanged: boolean = false;

  @Output() passengerInfoConfirmed = new EventEmitter<PassengerInfo>();

  handleFormSubmit() {
    if (this.passengerInfoForm.valid) {
      const passengerData = this.passengerInfoForm.value as PassengerInfo;
      this.passengerInfoConfirmed.emit(passengerData);
      this.formInputChanged = false;
      /*
        {
          username: passengerData.username!,
          mobile: passengerData.mobile!,
          email: passengerData.email!
        }
      */
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passengerInfoForm.valueChanges.subscribe(() => {
      this.formInputChanged = true;
    })
  }

  get username(): FormControl {
    return this.passengerInfoForm.get('username') as FormControl;
  }

  get mobile(): FormControl {
    return this.passengerInfoForm.get('mobile') as FormControl;
  }

  get email(): FormControl {
    return this.passengerInfoForm.get('email') as FormControl;
  }

}
