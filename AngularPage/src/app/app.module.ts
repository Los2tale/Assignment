import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';

import { MaterialExampleModule } from '../material.module';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    BarChartComponent , TableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BarChartComponent, TableComponent]
})
export class AppModule { }
