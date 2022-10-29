import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Bus, Seat } from '../models/bus.model';
import { SeatDisplayNamePipe } from '../pipes/seat-display-name.pipe';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-bus-seat-selection',
  templateUrl: './bus-seat-selection.component.html',
  styleUrls: ['./bus-seat-selection.component.css']
})
export class BusSeatSelectionComponent implements OnInit {

  seatSelectionForm = this.fb.group({
    seats: this.fb.array([])
  });

  seatsSelected: Seat[] = [];
  selectorLoading: boolean = true;
  // selectionChanged: boolean = false;

  displayedColumns: string[] = ['seatIndex', 'fare', 'class'];
  @ViewChild(MatTable) table: MatTable<Seat> | undefined;

  seatPipe: SeatDisplayNamePipe;

  @Output() seatSelectionConfirmed = new EventEmitter<Seat[]>();

  bus: Bus | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private busService: BusService) {
    this.seatPipe = new SeatDisplayNamePipe();
  }

  /* indexToSeat(index: number): string {
    const seatRow = ['A', 'B', 'C', 'D'][index % 4];
    const seatNumber = Math.floor(index / 4) + 1;
    return seatRow + seatNumber;
  } */

  getSeat = (seatIndex: number): string => {
    return this.seatPipe.transform(seatIndex);
  }

  getTotalFare = (): number => {
    return this.seatsSelected.reduce((total, seat) => total + seat.fare, 0);
  }

  handleSeatSelectionChange(event: any, index: number) {
    const selected = event.target.checked;
    if (selected) {
      this.seatsSelected.push({ seatIndex: index, fare: 1000, class: 'economy' })
    } else {
      this.seatsSelected = this.seatsSelected.filter(seat => seat.seatIndex != index);
    }
    this.seatSelectionConfirmed.emit(this.seatsSelected);
    this.table?.renderRows();
  }

  handleSeatSelectionConfirmed() {
    if (this.seatsSelected.length) {
      this.seatSelectionConfirmed.emit(this.seatsSelected);
    }
  }

  ngOnInit(): void {
    const busId = this.route.snapshot.paramMap.get('id');
    this.busService.getBusById(Number(busId)).subscribe(bus => {
      this.bus = bus[0];
      this.selectorLoading = true;
      for (let i = 1; i <= Number(this.bus.seats_available); i++) {
        this.seats.push(this.fb.control(false));
      }
      this.selectorLoading = false;
    })
  }

  get seats() {
    return this.seatSelectionForm.get('seats') as FormArray;
  }

}
