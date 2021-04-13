import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItem } from 'src/app/model/user-Item';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  let newUserItem: UserItem = { 
    id: "1",
    asin: 'ABC',
    value: 1,
    title: "Sample Title",
    image: "Sample Image",
    qty: 1,
    rating: 4,
    link: "http://localhost:4200/",
    userID: "a"
  };

  component.userItems[0] = newUserItem;
  component.userItems[1] = newUserItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //my tests

  it('should return total of all items ', () => {
    component.calcUserTotal();
    expect(component.userTotal).toBe(2);
  });

  it(' should return item id if an item is selected ', () => {
    const result = component.isSelected(newUserItem);
    expect(result).toBe(false);
  });

  it('current item should be the same as the one clicked ', () => {
    component.clicked(newUserItem);
    expect(component.currentItem).toBe(newUserItem);
  });

  it('deleted item bool should be set to false no matter what ', () => {
    component.deletedItemHandler(true);
    expect(component.deleteItemBool).toBe(false);
  });

  
  
});
