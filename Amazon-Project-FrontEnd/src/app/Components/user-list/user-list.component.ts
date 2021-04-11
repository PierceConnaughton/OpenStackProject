import { Component, OnInit } from '@angular/core';
import { AmazonCasesResponse } from 'src/app/model/AmazonCasesResponse';
import { UserItem } from '../../model/user-Item';
import { UserListService } from '../../Services/user-list.service';
import { FirebaseApiService} from '../../Services/firebase-api.service';
import { isNull } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userItems = [];

  userTotal = 0;

  userTotals: number[] = [0,0];

  userTotalsString: string[] = ["a","b"];

  MyCpus: any = [];

  message: string;

  currentItem : UserItem;

  deleteItemBool: boolean = false;

  

  constructor(
    
    private userService: UserListService,private firebaseService: FirebaseApiService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadUserItems();
  }

  handleSubscription() {
      this.loadUserItems();  
  }

  openDeleteItem(id: string):void {
    this.deleteItemBool = true;
    console.log('need to delete item with id '+ this.currentItem.id);
    this.deleteItem(this.currentItem.id)

    this.loadUserItems();
  }

  deleteItem(id: string){
    this.firebaseService.delPart(id)
    .subscribe({
      next: item => this.message = "item has been deleted",
      error: (err) => this.message = err
    });
  }

  deletedItemHandler(deletedItemBool: Boolean) {
    
  }
  

  loadUserItems() {
    this.firebaseService.getParts().subscribe((items: UserItem[]) => {
      this.userItems = items;
      this.calcUserTotal();
    })
  }

  calcUserTotal() {
    this.userTotal = 0
    var i = 0;
    this.userItems.forEach(item => {
      this.userTotalsString[i] = parseFloat(item.value).toFixed(2)
      
      
      this.userTotals[i] = +this.userTotalsString[i];
      

      if(+this.userTotals[i] == NaN || +this.userTotals[i] == null ){
       
      }
      else{
        console.log("This is the current value " + this.userTotals[i]);
        this.userTotal = (+this.userTotalsString[i] + this.userTotal);
      }
      
      i++;
    })
    
  }

  isSelected(item: UserItem): boolean{
    if (!item || !this.currentItem) {
      return false;
    }
    else {
      return item.id === this.currentItem.id;
    }
  }

  clicked (item: UserItem): void {
    this.currentItem = item;
  }

}
