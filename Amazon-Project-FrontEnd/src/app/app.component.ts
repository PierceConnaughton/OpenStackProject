import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/database";
import { NgAuthService } from "./ng-auth.service";

import { environment } from "../environments/environment";

import { AmazonApiService } from './Services/amazon-api.service';

import { AmazonMonitorResponse } from './model/AmazonMonitorResponse';
import { MatSliderModule } from '@angular/material/slider';

import {User} from './model/user';
import {SpecialUser} from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Amazon-Project';

  Logo: string = "assets/img/faviconInvert.ico";

  itemValue='';
  items: Observable<any[]>;

  userEmail: string = "partypierce1234@gmail.com";

  currentUser: User;
  userName: string = null;

  user: SpecialUser;

  constructor(public db:AngularFireDatabase, public ngAuthService: NgAuthService){
    this.items = db.list('items').valueChanges();
 
    
  }

  


  
}


