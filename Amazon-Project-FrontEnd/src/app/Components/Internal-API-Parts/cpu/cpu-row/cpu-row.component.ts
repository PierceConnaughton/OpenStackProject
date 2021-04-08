import { Component,Input, OnInit } from '@angular/core';
import {Cpu} from '../../../../model/cpu';

@Component({
  selector: 'cpu-row',
  templateUrl: './cpu-row.component.html',
  styleUrls: ['./cpu-row.component.css']
})
export class CpuRowComponent implements OnInit {

  @Input() cpu: Cpu;

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    
  }

}
