import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Bus, BusSearchParams } from '../models/bus.model';
import { BusService } from '../services/bus.service';
// import { DataSource } from '@angular/cdk/table';
// import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-bus-search-result',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})
export class BusSearchResultComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['bus_name', 'dept_time', 'coach_type', 'seats_available', 'fare', 'actions'];
  dataSource: Bus[] = [];
  displayedData: Bus[] = [];
  resultsLoading: boolean = true;
  /* @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;
  @ViewChild(MatSort) sort!: MatSort | null; */
  @Input()
  busSearchParams: BusSearchParams | null = null;

  constructor(private busService: BusService) {
  }

  /* busSearchFilter(buses: Bus[]) {
    if (this.busSearchParams) {
      return buses.filter(bus => {

        return (
          bus.source == this.busSearchParams?.source &&
          bus.destination == this.busSearchParams?.destination &&
          moment(bus.dept_time).get('date') == this.busSearchParams?.startDate.get('date')
        );
      });
    }
    return buses;
  } */

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resultsLoading = true;
    this.busService.getSearchedBuses(this.busSearchParams).subscribe(buses => {
        this.dataSource = buses;
        this.displayedData = this.dataSource;
        this.resultsLoading = false;
      }
    );
  }

  ngAfterViewInit() {
  }

  onPageEvent(event: PageEvent) {
    const pageSize = event.pageSize;
    const pageIndex = event.pageIndex;
    this.displayedData = this.dataSource.slice(pageSize * pageIndex, pageSize * (pageIndex + 1));
  }

}

/* class BusDataSource extends DataSource<Bus> {
  private _dataStream = this.busService.getBuses();

  constructor(private busService: BusService) {
    super();
  }

  connect(): Observable<Bus[]> {
    return this._dataStream;
  }

  disconnect() {}

}  */