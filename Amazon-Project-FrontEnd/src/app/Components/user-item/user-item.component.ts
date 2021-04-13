import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserItem } from 'src/app/model/user-Item';
import { UserListService } from '../../Services/user-list.service';
import { FirebaseApiService } from '../../Services/firebase-api.service';
import { NgAuthService } from "../../ng-auth.service";
import { User } from "../../ng-auth.service";

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userItem: UserItem

  @Output() deletedItemBool: EventEmitter<boolean> = new EventEmitter();

  newUser: User = this.ngAuthService.userState;



  imageOneStar: string = "assets/img/OneStar.png";
  imageTwoStar: string = "assets/img/TwoStar.png";
  imageThreeStar: string = "assets/img/ThreeStar.png";
  imageHalfFourStar:string = "assets/img/FourHalfStar.png";
  imageFourStar: string = "assets/img/FourStar.png";
  imageFiveStar: string = "assets/img/FiveStar.png";

  message: string;
  deleteItemBool: boolean = false;

  constructor(private firebaseService: FirebaseApiService, public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

  openDeleteItem(id: string):void {
    this.deleteItemBool = true;
    console.log('need to delete item with id '+ this.userItem.id);
    this.deleteItem(this.userItem.id)
    this.deletedItemBool.emit(true);
  }

  deleteItem(id: string){
    this.firebaseService.delPart(id)
    .subscribe({
      next: item => this.message = "item has been deleted",
      error: (err) => this.message = err
    });
  }

  // RemoveFromPc(item : UserItem){
  //       this.userService.deletePcItem(item.id)
  // }
}
