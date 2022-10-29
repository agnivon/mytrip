import { Component, OnInit } from '@angular/core';
import { BusSearchParams } from '../models/bus.model';

@Component({
  selector: 'app-bus-search-page',
  templateUrl: './bus-search-page.component.html',
  styleUrls: ['./bus-search-page.component.css']
})
export class BusSearchPageComponent implements OnInit {

  searchParams: BusSearchParams | null = null;
  searchFormSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchFormSubmit(searchParams: BusSearchParams) {
    this.searchParams = searchParams
    this.searchFormSubmitted = true;
  }

}
