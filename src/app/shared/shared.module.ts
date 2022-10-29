import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatDisplayNamePipe } from '../pipes/seat-display-name.pipe';
import { BookingService } from '../services/booking.service';
import { BusService } from '../services/bus.service';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeatDisplayNamePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SeatDisplayNamePipe,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    BookingService,
    BusService
  ]
})
export class SharedModule { }
