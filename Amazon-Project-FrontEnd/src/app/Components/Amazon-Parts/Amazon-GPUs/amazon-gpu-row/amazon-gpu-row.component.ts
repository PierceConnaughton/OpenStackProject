import { Component, OnInit,Input } from '@angular/core';
import { AmazonGpusResponse } from '../../../../model/AmazonGpuResponse';

@Component({
  selector: 'amazon-gpu-row',
  templateUrl: './amazon-gpu-row.component.html',
  styleUrls: ['./amazon-gpu-row.component.css']
})
export class AmazonGpuRowComponent implements OnInit {

  
  @Input() gpu: AmazonGpusResponse;

  constructor() { }

  ngOnInit(): void {
    
  }

  
  

}
