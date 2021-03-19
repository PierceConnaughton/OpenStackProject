import { Component, OnInit } from '@angular/core';
import  { HttpClientModule,HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { environment } from "../../../../../environments/environment";

import { AmazonApiService } from '../../../../Services/amazon-api.service';

import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';

@Component({
  selector: 'app-amazon-cases-list',
  templateUrl: './amazon-cases-list.component.html',
  styleUrls: ['./amazon-cases-list.component.css']
})
export class AmazonCasesListComponent implements OnInit {

  amazonData: AmazonCasesResponse;
  errorMessage: any;
  amazonDataTwo: AmazonCasesResponse;
  AmazonCasesListComponent

  results:[{
    rank: Int16Array;
    title:string;
    link:string;
    rating: Int16Array;
  }];

  constructor(private _amazonService:AmazonApiService){
  }

  ngOnInit(): void {
    this._amazonService.getCasesAmazonList().subscribe(
      amazonData => {
        this.amazonData=amazonData;
        console.log('"Best Selling Cases URL": '  + JSON.stringify(amazonData.request_metadata.amazon_url));

      },
      error => this.errorMessage = <any>error

    );
  }

 

  casesList: AmazonCasesResponse;

  showCasesForm: boolean = false;

  currentCases : AmazonCasesResponse;

  // search text property
  searchTextCasesTitle: string;

  order: string = 'amazonCasesTitle';
  reverse: boolean = false;

  clicked (cases: AmazonCasesResponse): void {
    this.currentCases = cases;
    this.getItemDetails(cases.asin);
  }

  isSelected(cases: AmazonCasesResponse): boolean{
    if (!cases || !this.currentCases) {
      return false;
    }
    else {
      return cases.asin === this.currentCases.asin;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

  getItemDetails(itemName:string) : boolean {
    this._amazonService.getCaseItemData(itemName).subscribe(
      amazonData => {
        this.amazonDataTwo=amazonData;
        console.log('"products asin": '  + JSON.stringify(amazonData.product.asin));

      },
      error => this.errorMessage = <any>error

    );
    return false;
  }
}
