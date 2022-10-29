import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seatDisplayName'
})
export class SeatDisplayNamePipe implements PipeTransform {

  indexToSeat(index: number): string {
    const seatRow = ['A', 'B', 'C', 'D'][index % 4];
    const seatNumber = Math.floor(index / 4) + 1;
    return seatRow + seatNumber;
  }

  transform(value: number, ...args: unknown[]): string {
    return this.indexToSeat(value);
  }

}
