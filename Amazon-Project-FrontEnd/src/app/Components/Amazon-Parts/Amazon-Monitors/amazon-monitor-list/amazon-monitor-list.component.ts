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
  amazonDataTwo: AmazonMonitorResponse;
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
    this.getItemDetails(monitor.asin);
  }

  isSelected(monitor: AmazonMonitorResponse): boolean{
    if (!monitor || !this.currentMonitor) {
      return false;
    }
    else {
      return monitor.asin === this.currentMonitor.asin;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

  getItemDetails(itemName:string) : boolean {
    this._amazonService.getMonitorItemData(itemName).subscribe(
      amazonData => {
        this.amazonDataTwo=amazonData;
        console.log('"products asin": '  + JSON.stringify(amazonData.product.asin));

      },
      error => this.errorMessage = <any>error

    );
    return false;
  }

}
