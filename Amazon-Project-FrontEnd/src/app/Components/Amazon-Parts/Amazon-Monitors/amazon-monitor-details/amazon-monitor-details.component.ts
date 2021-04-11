import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';
import { UserItem } from '../../../../model/user-Item';
import { FirebaseApiService } from 'src/app/Services/firebase-api.service';
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

  imageOneStar: string = "assets/img/OneStar.png";
  imageTwoStar: string = "assets/img/TwoStar.png";
  imageThreeStar: string = "assets/img/ThreeStar.png";
  imageHalfFourStar:string = "assets/img/FourHalfStar.png";
  imageFourStar: string = "assets/img/FourStar.png";
  imageFiveStar: string = "assets/img/FiveStar.png";

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

  constructor(private firebaseService: FirebaseApiService){
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

    this.firebaseService.addPart(this.newUserItem.asin, this.newUserItem.title, 
      this.newUserItem.value, this.newUserItem.rating, 
      this.newUserItem.image, this.newUserItem.link,).subscribe(() => {
      
    })
  }
  
}
