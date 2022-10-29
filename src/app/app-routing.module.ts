import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsListPageComponent } from './bookings-list-page/bookings-list-page.component';
import { BusBookingPageComponent } from './bus-booking-page/bus-booking-page.component';
import { BusSearchPageComponent } from './bus-search-page/bus-search-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path:'search-buses', component: BusSearchPageComponent },
  { path:'book-bus/:id', component: BusBookingPageComponent },
  { path: 'bookings', component: BookingsListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
