import { Component,Input, OnInit } from '@angular/core';
import {Gpu} from '../../../../model/gpu';
import { UserListService } from '../../../../Services/user-list.service';

@Component({
  selector: 'app-gpu-details',
  templateUrl: './gpu-details.component.html',
  styleUrls: ['./gpu-details.component.css']
})
export class GpuDetailsComponent implements OnInit {

  @Input() gpu: Gpu;

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
  }

  handleAddToPc() {
    
  }
}
