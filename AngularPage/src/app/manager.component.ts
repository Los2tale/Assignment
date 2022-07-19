import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Config } from '../../Config';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface PeriodicElement {
  year: number;
  asset: number;
  liabilities: number;
  equities: number;
  status: number;
}

interface Status {
  value: number;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'table-basic',
  styleUrls: ['./manager.component.css'],
  templateUrl: './manager.component.html',
})

export class TableComponent {

  @ViewChild(MatTable) table: MatTable<any> | undefined;

  search: String = "";

  constructor(private http: HttpClient, private changeDetectorRefs: ChangeDetectorRef, private router: Router, public dialog: MatDialog) { }

  displayedColumns: string[] = ['year', 'asset', 'liabilities', 'equities', 'status' ,'action'];
  dataSource = ELEMENT_DATA;

  status: Status[] = [
    { value: 1, viewValue: 'Active' },
    { value: 0, viewValue: 'Inactive' }
  ];

  validatingForm: FormGroup | undefined;

  ngOnInit() {
    this.dataSource = [];
    this.table?.renderRows();
    this.refresh()
  }

  getData(): Observable<Config[]> {
    return this.http.get<Config[]>('https://localhost:44313/api/get')
  }

  AddData(row_obj: PeriodicElement[]) {
    //this.router.navigate([{ outlets: { addPopup: ['add-data'] } }]); 
    //return this.http.put('https://localhost:44313/api/add', { body: row_obj }).subscribe((s) => {
    //  console.log(s);
    //})
  }

  EditData(row_obj: PeriodicElement[]) {
    //return this.http.put('https://localhost:44313/api/edit', { body: row_obj }).subscribe((s) => {
    //  console.log(s);
    //})
  }

  DeleteData(row_obj: PeriodicElement[]) {
    return this.http.delete('https://localhost:44313/api/delete', { body: row_obj }).subscribe((s) => {
      console.log(s);
    })
  }

  Back() {
    this.router.navigate(['chartcomponent']);
  }

  refresh() {
    this.dataSource = [];
    this.getData()
      .subscribe(data => {
        data.forEach((dataset, index) => {
          let x: PeriodicElement = { year: data[index].Year, asset: data[index].Asset, liabilities: data[index].Liabilities, equities: data[index].Equities, status: data[index].Status }
          this.dataSource.push(x);
          this.table?.renderRows();
        })
      })
  }

}

