import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmBookingDialogComponent } from '../confirm-booking-dialog/confirm-booking-dialog.component';
import { Bus, PassengerInfo, Seat } from '../models/bus.model';
import { SeatDisplayNamePipe } from '../pipes/seat-display-name.pipe';
import { BookingService } from '../services/booking.service';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-bus-booking-page',
  templateUrl: './bus-booking-page.component.html',
  styleUrls: ['./bus-booking-page.component.css']
})
export class BusBookingPageComponent implements OnInit {

  bus: Bus | null = null;
  seatsSelected: Seat[] = [];
  passengerInfo: PassengerInfo | null = null
  seatPipe: SeatDisplayNamePipe = new SeatDisplayNamePipe();

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute, private busService: BusService, private bookingService: BookingService) { }

  openConfirmDialog(): void {
    if (this.bus && this.seatsSelected.length && this.passengerInfo) {
      const dialogRef = this.dialog.open(ConfirmBookingDialogComponent, {
        width: '350px',
        data: {
          ...this.bus,
          seats: this.seatsSelected.map(seat => this.seatPipe.transform(seat.seatIndex)).join(', ')
        },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result) {
          this.bookingService.createBooking(this.bus!, this.passengerInfo!, this.seatsSelected);
          this.router.navigate(['/bookings']);
        }
      });
    }
  }

  handleSeatsConfirmed(seats: Seat[]) {
    this.seatsSelected = seats;
    console.log(this.seatsSelected)
  }

  handlePassengerInfoConfirmed(passengerInfo: PassengerInfo) {
    this.passengerInfo = passengerInfo;
    console.log(this.passengerInfo)
  }

  ngOnInit(): void {
    const busId = this.route.snapshot.paramMap.get('id');
    this.busService.getBusById(Number(busId)).subscribe(bus => this.bus = bus[0]);
  }

}
