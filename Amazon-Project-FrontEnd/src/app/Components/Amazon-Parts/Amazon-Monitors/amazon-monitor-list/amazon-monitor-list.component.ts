import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../../../../../environments/environment";

import { AmazonApiService } from '../../../../Services/amazon-api.service';

import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';
@Component({
  selector: 'app-amazon-monitor-list',
  templateUrl: './amazon-monitor-list.component.html',
  styleUrls: ['./amazon-monitor-list.component.css']
})
export class AmazonMonitorListComponent implements OnInit {

  amazonData: AmazonMonitorResponse;
  errorMessage: any;

  AmazonMonitorListComponent

  results:[{
    rank: Int16Array;
    title:string;
    link:string;
    rating: Int16Array;
  }];

  constructor(private _amazonService:AmazonApiService){
  }

  ngOnInit(): void {
    this._amazonService.getMonitorAmazonList().subscribe(
      amazonData => {
        this.amazonData=amazonData;
        console.log('"Best Selling Monitors URL": '  + JSON.stringify(amazonData.request_metadata.amazon_url));

      },
      error => this.errorMessage = <any>error

    );
  }

 

  monitorList: AmazonMonitorResponse;

  currentMonitor : AmazonMonitorResponse;

  // search text property
  searchTextMonitorTitle: string;

  order: string = 'amazonMonitorTitle';
  reverse: boolean = false;

  clicked (monitor: AmazonMonitorResponse): void {
    this.currentMonitor = monitor;
  }

  isSelected(monitor: AmazonMonitorResponse): boolean{
    if (!monitor || !this.currentMonitor) {
      return false;
    }
    else {
      return monitor.product.title === this.currentMonitor.product.title;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }
}
