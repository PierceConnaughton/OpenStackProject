import { Component, OnInit } from '@angular/core';
import { AmazonCasesResponse } from 'src/app/model/AmazonCasesResponse';
import { UserItem } from '../../model/user-Item';
import { UserListService } from '../../Services/user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userItems = [];

  userTotal = 0

  MyCpus: any = [];

  message: string;

  currentItem : UserItem;

  deleteItemBool: boolean = false;

  

  constructor(
    
    private userService: UserListService
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
    this.userService.deletePcItem(id)
    .subscribe({
      next: item => this.message = "item has been deleted",
      error: (err) => this.message = err
    });
  }

  deletedItemHandler(deletedItemBool: Boolean) {
    
  }
  

  loadUserItems() {
    this.userService.getPcItems().subscribe((items: UserItem[]) => {
      this.userItems = items;
      this.calcUserTotal();
    })
  }

  calcUserTotal() {
    this.userTotal = 0
    this.userItems.forEach(item => {
      this.userTotal += (item.value)
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
