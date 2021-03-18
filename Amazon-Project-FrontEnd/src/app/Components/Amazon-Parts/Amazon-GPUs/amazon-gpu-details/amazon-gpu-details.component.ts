import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonGpusResponse } from '../../../../model/AmazonGpuResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';

@Component({
  selector: 'amazon-gpu-details',
  templateUrl: './amazon-gpu-details.component.html',
  styleUrls: ['./amazon-gpu-details.component.css']
})
export class AmazonGpuDetailsComponent implements OnInit {

  //@Input() gpu: AmazonGpusResponse;
  @Input() amazonDataTwo: AmazonGpusResponse;

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
