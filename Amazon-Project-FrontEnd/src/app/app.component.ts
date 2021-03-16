import { Component } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/database";

import { environment } from "../environments/environment";

import { AmazonApiService } from './Services/amazon-api.service';

import { AmazonMonitorResponse } from './model/AmazonMonitorResponse';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon-Project';

  itemValue='';
  items: Observable<any[]>;

  

  constructor(public db:AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }
}
