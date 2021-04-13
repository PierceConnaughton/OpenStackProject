import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgAuthService } from "../../../ng-auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

  //firebase

  // addAdmin(email) { 
  //   let addRole=firebase.functions().httpsCallable('addAdminRole');
  //   console.log(email.value)
  //   addRole({email:email.value})
  //   .then((result) => {
  //     // Read result of the Cloud Function.
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  //  return false;
  // }

  // removeAdmin(email) {
  //   let removeRole=firebase.functions().httpsCallable('removeAdminRole');
  //   removeRole({email:email.value})
  //   .then((result) => {
  //     // Read result of the Cloud Function.
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  //  return false;
  // }

}
