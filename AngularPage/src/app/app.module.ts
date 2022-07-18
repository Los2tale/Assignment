import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarChartComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'; 

@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgChartsModule
  ],
  providers: [],
  bootstrap: [BarChartComponent]
})
export class AppModule { }
