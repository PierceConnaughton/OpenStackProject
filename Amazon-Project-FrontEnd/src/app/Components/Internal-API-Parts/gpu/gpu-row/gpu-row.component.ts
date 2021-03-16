import { Component,Input, OnInit } from '@angular/core';
import {Gpu} from '../../../../model/gpu';

@Component({
  selector: 'app-gpu-row',
  templateUrl: './gpu-row.component.html',
  styleUrls: ['./gpu-row.component.css']
})
export class GpuRowComponent implements OnInit {

  @Input() gpu: Gpu;

  constructor() { }

  ngOnInit(): void {
  }

}
