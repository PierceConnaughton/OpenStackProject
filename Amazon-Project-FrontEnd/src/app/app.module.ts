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
