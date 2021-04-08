import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {environment} from '../environments/environment';

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
import { AmazonCasesDetailsComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-details/amazon-cases-details.component';
import { AmazonCasesListComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-list/amazon-cases-list.component';
import { AmazonCpuListComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-list/amazon-cpu-list.component';
import { AmazonGpuListComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-list/amazon-gpu-list.component';

import { MonitorDetailsComponent } from './Components/Internal-API-Parts/monitor/monitor-details/monitor-details.component';
import { MonitorFormComponent } from './Components/Internal-API-Parts/monitor/monitor-form/monitor-form.component';
import { MonitorListComponent } from './Components/Internal-API-Parts/monitor/monitor-list/monitor-list.component';
import { MonitorRowComponent } from './Components/Internal-API-Parts/monitor/monitor-row/monitor-row.component';

import { GpuDetailsComponent } from './Components/Internal-API-Parts/gpu/gpu-details/gpu-details.component';
import { GpuFormComponent } from './Components/Internal-API-Parts/gpu/gpu-form/gpu-form.component';
import { GpuListComponent } from './Components/Internal-API-Parts/gpu/gpu-list/gpu-list.component';
import { GpuRowComponent } from './Components/Internal-API-Parts/gpu/gpu-row/gpu-row.component';

import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { appInitializer } from './helpers/app.initialiser';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UserService } from './Services/user.service';
import { AmazonGpuRowComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-row/amazon-gpu-row.component';
import { AmazonGpuDetailsComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-details/amazon-gpu-details.component';
import { AmazonMonitorRowComponent } from './Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-row/amazon-monitor-row.component';
import { AmazonCpuRowComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-row/amazon-cpu-row.component';
import { AmazonCpuDetailsComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-details/amazon-cpu-details.component';
import { AmazonCasesRowComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-row/amazon-cases-row.component';
import { CpuRowComponent } from './Components/Internal-API-Parts/cpu/cpu-row/cpu-row.component';
import { CpuListComponent } from './Components/Internal-API-Parts/cpu/cpu-list/cpu-list.component';
import { CpuFormComponent } from './Components/Internal-API-Parts/cpu/cpu-form/cpu-form.component';
import { CpuDetailsComponent } from './Components/Internal-API-Parts/cpu/cpu-details/cpu-details.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserItemComponent } from './Components/user-item/user-item.component';



@NgModule({
  declarations: [
    AppComponent,
    AmazonMonitorListComponent,
    HomeComponent,
    OrderByPipe,
    FilterPipe,
    PartFinderComponent,
    AmazonMonitorDetailsComponent,
    AmazonCasesDetailsComponent,
    AmazonCasesListComponent,
    AmazonCpuListComponent,
    AmazonGpuListComponent,
    MonitorDetailsComponent,
    MonitorFormComponent,
    MonitorListComponent,
    MonitorRowComponent,
    LoginComponent,
    LogoutComponent,


    GpuDetailsComponent,
    GpuFormComponent,
    GpuListComponent,
    GpuRowComponent,
    AmazonGpuRowComponent,
    AmazonGpuDetailsComponent,
    AmazonMonitorRowComponent,
    AmazonCpuRowComponent,
    AmazonCpuDetailsComponent,
    AmazonCasesRowComponent,
    CpuRowComponent,
    CpuListComponent,
    CpuFormComponent,
    CpuDetailsComponent,
    UserListComponent,
    UserItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [UserService] },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
