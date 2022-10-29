import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSearchPageComponent } from '../bus-search-page/bus-search-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusSearchFormComponent } from '../bus-search-form/bus-search-form.component';
import { BusSearchResultComponent } from '../bus-search-result/bus-search-result.component';
import { BusService } from '../services/bus.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BusSearchPageComponent,
    BusSearchFormComponent,
    BusSearchResultComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  /* exports: [
    BusSearchPageComponent,
    BusSearchFormComponent,
    BusSearchResultComponent
  ], */
  providers: [
    BusService
  ]
})
export class BusSearchModule { }
