import { Component, OnInit } from '@angular/core';
import {NgAuthService} from '../../../../ng-auth.service';

@Component({
  selector: 'app-cpu-home',
  templateUrl: './cpu-home.component.html',
  styleUrls: ['./cpu-home.component.css']
})
export class CpuHomeComponent implements OnInit {

userEmail: string = "partypierce1234@gmail.com";

  constructor( public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

}
