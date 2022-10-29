import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmBookingData } from '../models/bus.model';

@Component({
  selector: 'app-confirm-booking-dialog',
  templateUrl: './confirm-booking-dialog.component.html',
  styleUrls: ['./confirm-booking-dialog.component.css']
})
export class ConfirmBookingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmBookingData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
