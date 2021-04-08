import { Component,Input, OnInit } from '@angular/core';
import {Cpu} from '../../../../model/cpu';

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  @Input() cpu: Cpu;

  constructor() { }

  ngOnInit(): void {
  }

  
handleAddToPc() {
    
  }
}
