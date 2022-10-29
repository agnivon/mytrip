import { Component, OnInit } from '@angular/core';
import { Bus } from '../models/bus.model';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  buses: Bus[] = [];

  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.busService.getSortedBuses().subscribe(buses => {
      this.buses = buses.slice(0, 20);
    })
  }
}
