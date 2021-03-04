import { Component } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

import { AmazonApiService } from '../../Services/amazon-api.service';

import { AmazonMonitorResponse } from '../../model/AmazonMonitorResponse';
@Component({
  selector: 'part-finder',
  templateUrl: './part-finder.component.html',
  styleUrls: ['./part-finder.component.css']
})
export class PartFinderComponent {

  amazonData: AmazonMonitorResponse;
  errorMessage: any;

  constructor(private _amazonService:AmazonApiService){
  }
  
  getItemDetails(itemName:string) : boolean {
    this._amazonService.getItemData(itemName).subscribe(
      amazonData => {
        this.amazonData=amazonData;
        console.log('"products title": '  + JSON.stringify(amazonData.product.title));

      },
      error => this.errorMessage = <any>error

    );
    return false;
  }
  
  public results = [];
}
