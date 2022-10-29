import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/bus.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings-list-page',
  templateUrl: './bookings-list-page.component.html',
  styleUrls: ['./bookings-list-page.component.css']
})
export class BookingsListPageComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
    /* this.bookings.push({
      "bus": {
        "id": 48,
        "bus_name": "Bus 48",
        "source": "Jaipur",
        "destination": "Mumbai",
        "dept_time": 1666058827678,
        "coach_type": "AC",
        "seats_available": 48,
        "fare": "1835"
      },
      "passengerInfo": {
        "username": "agnivon",
        "mobile": "9845655889",
        "email": "agnivon@gmail.com"
      },
      "seats": "C1, D1, A2",
      "ticketId": "l88dt76o",
      "totalFare": 3000,
      "bookingDate": 1663568631455
    }); */
    console.log(this.bookings);
  }

}
