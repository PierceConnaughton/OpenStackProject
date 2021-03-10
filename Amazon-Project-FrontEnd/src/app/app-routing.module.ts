import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //CLI imports router
import {AmazonMonitorListComponent} from '../app/Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-list/amazon-monitor-list.component';
import {PartFinderComponent} from '../app/Components/part-finder/part-finder.component';
import { AmazonCasesListComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-list/amazon-cases-list.component';
import { AmazonCpuListComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-list/amazon-cpu-list.component';
import { AmazonGpuListComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-list/amazon-gpu-list.component';

import {HomeComponent} from './Components/home/home.component';

import {MonitorListComponent} from './Components/Internal-API-Parts/monitor/monitor-list/monitor-list.component';
import {AmazonHomeComponent} from './Components/Amazon-Parts/amazon-home/amazon-home.component'
import {RestApiHomeComponent} from './Components/Internal-API-Parts/rest-api-home/rest-api-home.component'


import {LoginComponent} from './Components/login/login.component';
import {LogoutComponent} from './Components/logout/logout.component';

const routes: Routes = [

 {path: '', component: HomeComponent},
 {path: 'part-finder', component: PartFinderComponent},
 { path: 'amazon-monitor-list-component', component: AmazonMonitorListComponent},
 {path: 'amazon-cases-list-component', component: AmazonCasesListComponent},
 {path: 'amazon-cpu-list-component', component: AmazonCpuListComponent},
 {path: 'amazon-gpu-list-component', component: AmazonGpuListComponent},
 { path: 'monitor-list-component', component: MonitorListComponent},
 { path: 'login', component: LoginComponent },
   {path: 'logout', component: LogoutComponent},
   {path: 'amazon-home', component: AmazonHomeComponent},
   {path: 'rest-api-home', component: RestApiHomeComponent},
  
  
]; //sets up routes constant where you define your routes

//configures NGModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
