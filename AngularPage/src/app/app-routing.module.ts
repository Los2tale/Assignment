import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TableComponent } from './manager.component';

const routes: Routes = [
  //{ path: 'tablecomponent', component: TableComponent }
  { path: 'tablecomponent', component: TableComponent }
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
