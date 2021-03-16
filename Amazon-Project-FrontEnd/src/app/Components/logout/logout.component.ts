import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  // public currentUser: any = {};

  // constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.userService.getCurrentUser().then(profile => this.currentUser = profile)
    //     .catch(() => this.currentUser = {});
  }

  // logout() {
  //   this.userService.logout();
  //   this.router.navigate(['/login']);
  // }

  user : User;

  constructor (private userService: UserService, private router: Router) {
    this.userService.user.subscribe( user => this.user = user)
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}