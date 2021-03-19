import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';

@Component({
  selector: 'amazon-cases-details',
  templateUrl: './amazon-cases-details.component.html',
  styleUrls: ['./amazon-cases-details.component.css']
})
export class AmazonCasesDetailsComponent implements OnInit {

  //@Input() gpu: AmazonGpusResponse;
  @Input() amazonDataTwo: AmazonCasesResponse;

  array: [{
    name:string
  }];

  categoriesString: String;

  errorMessage: any;

  constructor(){
  }

  ngOnInit(): void {
    this.array = this.amazonDataTwo.product.categories;
    this.categoriesString = this.array.join(",");
  }
  
  public results = [];

}
