import { Component,Input, OnInit } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';


@Component({
  selector: 'amazon-monitor-details',
  templateUrl: './amazon-monitor-details.component.html',
  styleUrls: ['./amazon-monitor-details.component.css']
})
export class AmazonMonitorDetailsComponent implements OnInit {

  @Input() monitor: AmazonMonitorResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
