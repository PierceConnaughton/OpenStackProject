import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../../../../../environments/environment";

import { AmazonApiService } from '../../../../Services/amazon-api.service';

import { AmazonGpusResponse } from '../../../../model/AmazonGpuResponse';

@Component({
  selector: 'app-amazon-gpu-list',
  templateUrl: './amazon-gpu-list.component.html',
  styleUrls: ['./amazon-gpu-list.component.css']
})
export class AmazonGpuListComponent implements OnInit {

  amazonData: AmazonGpusResponse;

  amazonDataTwo: AmazonGpusResponse;
  errorMessage: any;

  AmazonGpusListComponent

  // rankString: string;
  // ratingString: string;

  results:[{
    rank: string;
    title:string;
    link:string;
    rating: string;
  }];

  constructor(private _amazonService:AmazonApiService){
  }

  ngOnInit(): void {
    this._amazonService.getGpuAmazonList().subscribe(
      amazonData => {
        this.amazonData=amazonData;

        console.log('"Best Selling Gpus URL": '  + JSON.stringify(amazonData.request_metadata.amazon_url));

      },
      error => this.errorMessage = <any>error

    );
    
    // this.rankString = this.rankToString(this.amazonData.rank)
    // this.ratingString =  this.ratingToString(this.amazonData.rating)
  }

  gpuList: AmazonGpusResponse;

  showGpuForm: boolean = false;

  currentGpu : AmazonGpusResponse;

  // search text property
  searchTextGpuTitle: string;

  order: string = 'title';
  reverse: boolean = false;

  clicked (gpu: AmazonGpusResponse): void {
    this.currentGpu = gpu;
    this.getItemDetails(gpu.asin);
  }

  isSelected(gpu: AmazonGpusResponse): boolean{
    if (!gpu || !this.currentGpu) {
      return false;
    }
    else {
      return gpu.asin === this.currentGpu.asin;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

  getItemDetails(itemName:string) : boolean {
    this._amazonService.getGpuItemData(itemName).subscribe(
      amazonData => {
        this.amazonDataTwo=amazonData;
        console.log('"products asin": '  + JSON.stringify(amazonData.product.asin));

      },
      error => this.errorMessage = <any>error

    );
    return false;
  }
  
  //  rankToString(rank) {
  //   return String.fromCharCode.apply(null, new Uint16Array(rank));
  // }

  // ratingToString(rating) {
  //   return String.fromCharCode.apply(null, new Uint16Array(rating));
  // }

}
