import { Component } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../environments/environment";

import { AmazonApiService } from './Services/amazon-api.service';

import { AmazonMonitorResponse } from './model/AmazonMonitorResponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon-Project';

  

  constructor(){
  }
}
