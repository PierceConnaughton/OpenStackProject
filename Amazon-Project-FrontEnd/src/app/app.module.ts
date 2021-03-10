import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import {AmazonMonitorListComponent} from '../app/Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-list/amazon-monitor-list.component'

import { HomeComponent } from './Components/home/home.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import {FilterPipe} from './filter.pipe';

import { APP_INITIALIZER } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { PartFinderComponent } from './Components/part-finder/part-finder.component';
import { AmazonMonitorDetailsComponent } from './Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-details/amazon-monitor-details.component';
import { AmazonMonitorRowComponent } from './Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-row/amazon-monitor-row.component';
import { AmazonCasesDetailsComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-details/amazon-cases-details.component';
import { AmazonCasesRowComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-row/amazon-cases-row.component';
import { AmazonCasesListComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-list/amazon-cases-list.component';
import { AmazonCpuListComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-list/amazon-cpu-list.component';
import { AmazonGpuListComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-list/amazon-gpu-list.component';
import { MonitorDetailsComponent } from './Components/Internal-API-Parts/monitor/monitor-details/monitor-details.component';
import { MonitorFormComponent } from './Components/Internal-API-Parts/monitor/monitor-form/monitor-form.component';
import { MonitorListComponent } from './Components/Internal-API-Parts/monitor/monitor-list/monitor-list.component';
import { MonitorRowComponent } from './Components/Internal-API-Parts/monitor/monitor-row/monitor-row.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    AmazonMonitorListComponent,
    HomeComponent,
    
    OrderByPipe,
    FilterPipe,
    PartFinderComponent,
    AmazonMonitorDetailsComponent,
    AmazonMonitorRowComponent,
    AmazonCasesDetailsComponent,
    AmazonCasesRowComponent,
    AmazonCasesListComponent,
    AmazonCpuListComponent,
    AmazonGpuListComponent,
    MonitorDetailsComponent,
    MonitorFormComponent,
    MonitorListComponent,
    MonitorRowComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
