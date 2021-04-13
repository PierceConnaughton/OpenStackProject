import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { UserItem } from 'src/app/model/user-Item';
import { FirebaseApiService } from 'src/app/Services/firebase-api.service';
import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';
import { UserListService } from '../../../../Services/user-list.service';
import { NgAuthService } from "../../../../ng-auth.service";
import { User } from "../../../../ng-auth.service";

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

  newUserItem: UserItem = { 
    id: "a",
    asin: 'a',
    value: 1,
    title: "a",
    image: "a",
    qty: 0,
    rating: 0,
    link: "a",
    userID: "a"
  };

  newUser: User = this.ngAuthService.userState;

  

  imageOneStar: string = "assets/img/OneStar.png";
  imageTwoStar: string = "assets/img/TwoStar.png";
  imageThreeStar: string = "assets/img/ThreeStar.png";
  imageHalfFourStar:string = "assets/img/FourHalfStar.png";
  imageFourStar: string = "assets/img/FourStar.png";
  imageFiveStar: string = "assets/img/FiveStar.png";
  
  categoriesString: String;

  errorMessage: any;

  constructor(private firebaseService: FirebaseApiService, public ngAuthService: NgAuthService ){
  }

  ngOnInit(): void {
    this.array = this.amazonDataTwo.product.categories;
    this.categoriesString = this.array.join(",");
  }
  
  public results = [];

  handleAddToPc(userID: string){

    

    this.newUserItem.asin = this.amazonDataTwo.product.asin;
    this.newUserItem.value = this.amazonDataTwo.product.buybox_winner.price.value;
    this.newUserItem.title = this.amazonDataTwo.product.title;
    this.newUserItem.image = this.amazonDataTwo.product.images[0].link;
    this.newUserItem.rating = this.amazonDataTwo.product.rating;
    this.newUserItem.link = this.amazonDataTwo.product.link;
    this.newUserItem.userID = userID

    this.firebaseService.addPart(this.newUserItem.asin, this.newUserItem.title, 
      this.newUserItem.value, this.newUserItem.rating, 
      this.newUserItem.image, this.newUserItem.link,this.newUserItem.userID).subscribe(() => {
      
    })
  }

  // createNewMonitor(newCase: AmazonCasesResponse): void {
  //   console.log('adding new case ' + JSON.stringify(newCase));
  //   this.userService.createMonitor({ brand: 'dsfdsfa', ...newMonitor })
  //     .subscribe({
  //       next: monitor => {
  //         console.log(JSON.stringify(monitor) + ' has been added');
  //       this.message = "new monitor has been added";},
  //       error: (err) => this.message = err
  //     })
  // }

}
