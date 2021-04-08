import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';
import { UserItem } from 'src/app/model/user-Item';
import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';
import { AmazonApiService } from '../../../../Services/amazon-api.service';
import { UserListService } from '../../../../Services/user-list.service';

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
    link: "a"
  };

  categoriesString: String;

  errorMessage: any;

  constructor(private userService: UserListService){
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
