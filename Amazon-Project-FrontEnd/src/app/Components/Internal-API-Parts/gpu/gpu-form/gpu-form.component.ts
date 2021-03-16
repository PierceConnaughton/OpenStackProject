import { Component,Input, OnInit } from '@angular/core';
import {Gpu} from '../../../../model/gpu';

@Component({
  selector: 'app-gpu-form',
  templateUrl: './gpu-form.component.html',
  styleUrls: ['./gpu-form.component.css']
})
export class GpuFormComponent implements OnInit {

  @Input() gpu: Gpu;

  constructor() { }

  ngOnInit(): void {
  }

}
