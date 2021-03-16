import { Component,Input, OnInit } from '@angular/core';
import {Gpu} from '../../../../model/gpu';

@Component({
  selector: 'app-gpu-details',
  templateUrl: './gpu-details.component.html',
  styleUrls: ['./gpu-details.component.css']
})
export class GpuDetailsComponent implements OnInit {

  @Input() gpu: Gpu;

  constructor() { }

  ngOnInit(): void {
  }

}
