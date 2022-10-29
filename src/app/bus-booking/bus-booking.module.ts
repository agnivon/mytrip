import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusBookingPageComponent } from '../bus-booking-page/bus-booking-page.component';
import { BusSeatSelectionComponent } from '../bus-seat-selection/bus-seat-selection.component';
import { SharedModule } from '../shared/shared.module';
import { BusBookingFormComponent } from '../bus-booking-form/bus-booking-form.component';
import { ConfirmBookingDialogComponent } from '../confirm-booking-dialog/confirm-booking-dialog.component';
import { AppRoutingModule } from '../app-routing.module';
import { BookingsListPageComponent } from '../bookings-list-page/bookings-list-page.component';

@NgModule({
  declarations: [
    BusBookingPageComponent,
    BusSeatSelectionComponent,
    BusBookingFormComponent,
    ConfirmBookingDialogComponent,
    BookingsListPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  /* exports: [
    BusBookingPageComponent
  ] */
})
export class BusBookingModule { }
