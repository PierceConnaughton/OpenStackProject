import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';


@Component({
  selector: 'amazon-monitor-details',
  templateUrl: './amazon-monitor-details.component.html',
  styleUrls: ['./amazon-monitor-details.component.css']
})
export class AmazonMonitorDetailsComponent implements OnInit {

  @Input() amazonDataTwo: AmazonMonitorResponse;

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
