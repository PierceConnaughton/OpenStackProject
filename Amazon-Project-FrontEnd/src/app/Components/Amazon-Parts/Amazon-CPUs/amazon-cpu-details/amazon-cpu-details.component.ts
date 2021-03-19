import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonCpusResponse } from '../../../../model/AmazonCpuResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';

@Component({
  selector: 'amazon-cpu-details',
  templateUrl: './amazon-cpu-details.component.html',
  styleUrls: ['./amazon-cpu-details.component.css']
})
export class AmazonCpuDetailsComponent implements OnInit {

  //@Input() gpu: AmazonGpusResponse;
  @Input() amazonDataTwo: AmazonCpusResponse;

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
