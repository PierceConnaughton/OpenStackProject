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
  errorMessage: any;

  AmazonGpusListComponent

  results:[{
    rank: Int16Array;
    title:string;
    link:string;
    rating: Int16Array;
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
  }

 

  gpuList: AmazonGpusResponse;

  showGpuForm: boolean = false;

  currentGpu : AmazonGpusResponse;

  // search text property
  searchTextGpuTitle: string;

  order: string = 'amazonGpuTitle';
  reverse: boolean = false;

  clicked (gpu: AmazonGpusResponse): void {
    this.currentGpu = gpu;
  }

  isSelected(gpu: AmazonGpusResponse): boolean{
    if (!gpu || !this.currentGpu) {
      return false;
    }
    else {
      return gpu.product.title === this.currentGpu.product.title;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

}
