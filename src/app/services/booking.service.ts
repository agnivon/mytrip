import { Injectable } from '@angular/core';
import { Booking, Bus, PassengerInfo, Seat } from '../models/bus.model';
import * as uniqid from 'uniqid';
import { SeatDisplayNamePipe } from '../pipes/seat-display-name.pipe';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] = [];
  seatPipe = new SeatDisplayNamePipe();

  constructor() { }

  createBooking(bus: Bus, passengerInfo: PassengerInfo, seats: Seat[]) {
    const seatsString = seats.map(seat => this.seatPipe.transform(seat.seatIndex)).join(', ');
    const totalFare = seats.reduce((fare, seat) => fare + seat.fare, 0);
    const currentDate = Date.now();

    this.bookings.push({
      bus,
      passengerInfo,
      seats: seatsString,
      ticketId: uniqid(),
      totalFare,
      bookingDate: currentDate
    });
  }

  getBookings(): Booking[] {
    return this.bookings;
  }

}
