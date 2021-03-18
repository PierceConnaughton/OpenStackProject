import { Component, OnInit,Input } from '@angular/core';
import { AmazonCpusResponse } from '../../../../model/AmazonCpuResponse';

@Component({
  selector: 'amazon-cpu-row',
  templateUrl: './amazon-cpu-row.component.html',
  styleUrls: ['./amazon-cpu-row.component.css']
})
export class AmazonCpuRowComponent implements OnInit {

  @Input() cpu: AmazonCpusResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
