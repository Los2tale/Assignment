import { HttpClient } from '@angular/common/http';
import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Config } from '../../Config';

export interface PeriodicElement {
  id: number;
  year: number;
  asset: number;
  liabilities: number;
  equities: number;
  status: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private http: HttpClient, private changeDetectorRefs: ChangeDetectorRef) { }
  displayedColumns: string[] = ['year', 'asset', 'liabilities', 'equities','status'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.refresh()
  }

  getData(): Observable<Config[]> {
    return this.http.get<Config[]>('https://localhost:44313/api/get')
  }

 refresh() {
   console.log("refresh")
   this.getData()
      .subscribe(data => {
        data.forEach((dataset, index) => {
          let x: PeriodicElement = { id: data[index].ID, year: data[index].Year, asset: data[index].Asset, liabilities: data[index].Liabilities, equities: data[index].Equities, status: data[index].Status }
          this.dataSource.push(x);
          this.table.renderRows();
        })
      })
  }

}
