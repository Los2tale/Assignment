import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BarChartComponent } from './chart.component';
import { TableComponent } from './manager.component';

const routes: Routes = [
  //{ path: 'tablecomponent', component: TableComponent }
  { path: 'tablecomponent', component: TableComponent },
  { path: 'chartcomponent', component: BarChartComponent },
  { path: '', redirectTo: '/chartcomponent', pathMatch: 'full' },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
