import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';
import { UserItem } from '../../../../model/user-Item';
import { UserListService } from '../../../../Services/user-list.service';


@Component({
  selector: 'amazon-monitor-details',
  templateUrl: './amazon-monitor-details.component.html',
  styleUrls: ['./amazon-monitor-details.component.css']
})
export class AmazonMonitorDetailsComponent implements OnInit {

  @Input() amazonDataTwo: AmazonMonitorResponse;

  currentRate: Number;
  currentRateString: String;

  array: [{
    name:string
  }];

  categoriesString: String;

  errorMessage: any;

  newUserItem: UserItem = { 
    id: "a",
    asin: 'a',
    value: 1,
    title: "a",
    image: "a",
    qty: 0,
    rating: 0,
    link: "a"
  };

  constructor(private userService: UserListService){
    //this.currentRate = this.amazonDataTwo.product.rating;
    //this.currentRate = Number(this.currentRateString);
  }

  ngOnInit(): void {
    this.array = this.amazonDataTwo.product.categories;
    this.categoriesString = this.array.join(",");
    
  }
  
  public results = [];

  handleAddToPc(){

    this.newUserItem.asin = this.amazonDataTwo.product.asin;
    this.newUserItem.value = this.amazonDataTwo.product.buybox_winner.price.value;
    this.newUserItem.title = this.amazonDataTwo.product.title;
    this.newUserItem.image = this.amazonDataTwo.product.images[0].link;
    this.newUserItem.rating = this.amazonDataTwo.product.rating;
    this.newUserItem.link = this.amazonDataTwo.product.link;

    this.userService.addPartToPc(this.newUserItem).subscribe(() => {
      
    })
  }
  
}
