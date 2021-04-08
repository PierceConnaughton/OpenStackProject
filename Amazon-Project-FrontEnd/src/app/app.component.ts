import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/database";

import { environment } from "../environments/environment";

import { AmazonApiService } from './Services/amazon-api.service';

import { AmazonMonitorResponse } from './model/AmazonMonitorResponse';
import { MatSliderModule } from '@angular/material/slider';

import {User} from './model/user';
import {SpecialUser} from './model/user';
import {UserService} from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Amazon-Project';

  itemValue='';
  items: Observable<any[]>;

  currentUser: User;
  userName: string = null;

  user: SpecialUser;

  constructor(public db:AngularFireDatabase, private userService: UserService){
    this.items = db.list('items').valueChanges();
    this.userService.user.subscribe( user => this.currentUser = user)
 
    
  }

  


  
}


