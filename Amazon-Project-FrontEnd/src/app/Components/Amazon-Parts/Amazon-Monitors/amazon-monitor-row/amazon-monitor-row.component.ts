import { Component,Input, OnInit } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';

@Component({
  selector: 'app-amazon-monitor-row',
  templateUrl: './amazon-monitor-row.component.html',
  styleUrls: ['./amazon-monitor-row.component.css']
})
export class AmazonMonitorRowComponent implements OnInit {

  @Input() monitor: AmazonMonitorResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
