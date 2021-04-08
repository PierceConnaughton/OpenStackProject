import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from 'src/app/model/user-Item';
import { UserListService } from '../../Services/user-list.service';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userItem: UserItem

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
  }

  // RemoveFromPc(item : UserItem){
  //       this.userService.deletePcItem(item.id)
  // }
}
