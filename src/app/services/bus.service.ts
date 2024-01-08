import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable } from 'rxjs';
import { Bus, BusSearchParams } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {


  constructor(private http: HttpClient) { }

  busSearchFilter(buses: Bus[], busSearchParams: BusSearchParams | null) {
    if (busSearchParams) {
      return buses.filter(bus => {

        return (
          bus.source == busSearchParams?.source &&
          bus.destination == busSearchParams?.destination &&
          moment(bus.dept_time).get('date') == busSearchParams?.startDate.get('date')
        );
      });
    }
    return buses;
  }

  busIdFilter(buses: Bus[], id: number) {
    return buses.filter(bus => bus.id == id);
  }

  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>('assets/buses.json').pipe(map((buses: Bus[]) => {
      const currentDate = Date.now()
      return buses.filter(bus => bus.dept_time > currentDate + (120 * 3600 * 1000));
    }));
  }

  // Sorted by date
  getSortedBuses(): Observable<Bus[]> {
    return this.getBuses().pipe(map((buses: Bus[]) => {
      buses.sort((a, b) => a.dept_time < b.dept_time ? -1 : 1);
      return buses;
    }))
  }

  getSearchedBuses(searchParams: BusSearchParams | null): Observable<Bus[]> {
    return this.getBuses().pipe(map((buses: Bus[]) => this.busSearchFilter(buses, searchParams)));
  }

  getBusById(id: number): Observable<Bus[]> {
    return this.getBuses().pipe(map((buses: Bus[]) => this.busIdFilter(buses, id)));
  }
}
