import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../../../../../environments/environment";

import { AmazonApiService } from '../../../../Services/amazon-api.service';

import { AmazonCpusResponse } from '../../../../model/AmazonCpuResponse';

@Component({
  selector: 'app-amazon-cpu-list',
  templateUrl: './amazon-cpu-list.component.html',
  styleUrls: ['./amazon-cpu-list.component.css']
})
export class AmazonCpuListComponent implements OnInit {

  amazonData: AmazonCpusResponse;
  errorMessage: any;
  amazonDataTwo: AmazonCpusResponse;
  AmazonCpusListComponent

  results:[{
    rank: Int16Array;
    title:string;
    link:string;
    rating: Int16Array;
  }];

  constructor(private _amazonService:AmazonApiService){
  }

  ngOnInit(): void {
    this._amazonService.getCpuAmazonList().subscribe(
      amazonData => {
        this.amazonData=amazonData;
        console.log('"Best Selling Cpus URL": '  + JSON.stringify(amazonData.request_metadata.amazon_url));

      },
      error => this.errorMessage = <any>error

    );
  }

  loadCpus(): void{
    this._amazonService.getCpuAmazonList().subscribe(
      amazonData => {
        this.amazonData=amazonData;
        console.log('"Best Selling Cpus URL": '  + JSON.stringify(amazonData.request_metadata.amazon_url));

      },
      error => this.errorMessage = <any>error

    );
  }

 

  cpuList: AmazonCpusResponse;

  showCpuForm: boolean = false;

  currentCpu : AmazonCpusResponse;

  // search text property
  searchTextCpuTitle: string;

  order: string = 'title';
  reverse: boolean = false;

  clicked (cpu: AmazonCpusResponse): void {
    this.currentCpu = cpu;
    this.getItemDetails(cpu.asin);
  }

  isSelected(cpu: AmazonCpusResponse): boolean{
    if (!cpu || !this.currentCpu) {
      return false;
    }
    else {
      return cpu.asin === this.currentCpu.asin;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

  getItemDetails(itemName:string) : boolean {
    this._amazonService.getCpuItemData(itemName).subscribe(
      amazonData => {
        this.amazonDataTwo=amazonData;
        console.log('"products asin": '  + JSON.stringify(amazonData.product.asin));

      },
      error => this.errorMessage = <any>error

    );
    return false;
  }

}
