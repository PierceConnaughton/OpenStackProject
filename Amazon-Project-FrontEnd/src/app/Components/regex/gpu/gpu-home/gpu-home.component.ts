import { Component, OnInit } from '@angular/core';
import {NgAuthService} from '../../../../ng-auth.service';

@Component({
  selector: 'app-gpu-home',
  templateUrl: './gpu-home.component.html',
  styleUrls: ['./gpu-home.component.css']
})
export class GpuHomeComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

}
