import { Component, Input, OnInit } from '@angular/core';
import {IMonitor} from '../../../../model/monitor';

@Component({
  selector: 'app-monitor-details',
  templateUrl: './monitor-details.component.html',
  styleUrls: ['./monitor-details.component.css']
})
export class MonitorDetailsComponent implements OnInit {

  @Input() monitor : IMonitor;

  constructor() { }

  ngOnInit(): void {
  }

}
