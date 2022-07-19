import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { addComponent } from './addedit.component';
import { BarChartComponent } from './chart.component';
import { TableComponent } from './manager.component';

const routes: Routes = [
  //{ path: 'tablecomponent', component: TableComponent }
  { path: 'tablecomponent', component: TableComponent },
  { path: 'chartcomponent', component: BarChartComponent },
  { path: 'add-data', component: addComponent, outlet: 'addPopup' },
  //{ path: 'add-data/:book-id', component: AddEditComponent, outlet: 'bookPopup'},
  { path: '', redirectTo: '/chartcomponent', pathMatch: 'full' },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
