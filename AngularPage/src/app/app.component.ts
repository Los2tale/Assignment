import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
//  public forecasts?: WeatherForecast[];

//  constructor(http: HttpClient) {
//    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
//      this.forecasts = result;
//    }, error => console.error(error));
//  }

//  title = 'AngularPage';

  //private barChartOptions: any = {
  //  scaleShowVerticalLines: false,
  //  responsive: true
  //};
  //private barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  //private barChartType: string = 'bar';
  //private barChartLegend: boolean = true;

  //private barChartData: any[] = [
  //  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  //];

  //// events
  //private chartClicked(e: any): void {
  //  console.log(e);
  //}

  //private chartHovered(e: any): void {
  //  console.log(e);
  //}
//}
//@Injectable()
//export class ConfigService {
//  constructor(private http: HttpClient) { }
//}

export class BarChartComponent {
  errorMessage: string = '';
  constructor(private http: HttpClient) { }

  getData() {
    var url = "http://localhost:5000/api/load";

    //this.barChartData = [];
    this.http.get(url)
      .subscribe((response) => {
      }, (response) => {
        this.errorMessage = "Request failed.";
      });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  title = 'AngularPage';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Asset' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Total Liabilities', stack: 'finan' },
      { data: [1, 2, 3, 14, 5, 6, 97], label: 'Total Equities', stack: 'finan' },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }
}
