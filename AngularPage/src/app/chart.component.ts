import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Observable } from 'rxjs';
import { Config } from 'Config'
import { Router } from '@angular/router';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class BarChartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  chartData = [
    {
      data: [],
      label: 'Total Asset',
      backgroundColor: "rgb(229,0,0)",
      hoverBackgroundColor: "rgb(229,0,0)"
    },
    {
      data: [],
      label: 'Total Liabilities',
      stack: 'finan',
      backgroundColor: "rgb(0,0,229)",
      hoverBackgroundColor: "rgb(0,0,229)"
    },
    {
      data: [],
      label: 'Total Equities',
      stack: 'finan',
      backgroundColor: "rgb(50,50,50)",
      hoverBackgroundColor: "rgb(50,50,50)"
    }
  ];

  title = 'Financial';

  getData(): Observable<Config[]> {
    return this.http.get<Config[]>('https://localhost:44313/api/load')
  }

  ngOnInit() {
    this.refresh()
    this.chart?.update();
    this.chart?.ngOnChanges({});
  }

  refresh() {
    this.getData()
      .subscribe(data => {
        data.forEach((dataset, index) => {
          this.barChartData.labels?.push(data[index].Year);
          this.barChartData.datasets[0].data.push(data[index].Asset);
          this.barChartData.datasets[1].data.push(data[index].Liabilities);
          this.barChartData.datasets[2].data.push(data[index].Equities);
        })
        this.chart?.update();
      })
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    hover: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
      },
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'start',
        align: 'bottom',
        color: 'white',
        formatter: (value) => {
          return value/1000000;
        },
        rotation: -90,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ' ';
            }
            if (context.parsed.y !== null) {
              label += label += (context.parsed.y) / 1000000 + " MB.";
            }
            return label;
          }
        }
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: this.chartData
  };

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  gotoManager() {
    this.router.navigate(['tablecomponent']);
  }
}
