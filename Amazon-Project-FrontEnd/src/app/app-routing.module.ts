import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //CLI imports router
import {AmazonMonitorListComponent} from '../app/Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-list/amazon-monitor-list.component';
import {PartFinderComponent} from '../app/Components/part-finder/part-finder.component';

import {HomeComponent} from './Components/home/home.component';

const routes: Routes = [
  { path: 'amazon-monitor-list-component', component: AmazonMonitorListComponent},
 {path: '', component: HomeComponent},
 {path: 'part-finder', component: PartFinderComponent},
  
]; //sets up routes constant where you define your routes

//configures NGModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
