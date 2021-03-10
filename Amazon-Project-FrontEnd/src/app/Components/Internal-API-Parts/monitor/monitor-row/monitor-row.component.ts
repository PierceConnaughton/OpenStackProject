import { Component, Input, OnInit } from '@angular/core';
import {IMonitor} from '../../../../model/monitor';

@Component({
  selector: 'app-monitor-row',
  templateUrl: './monitor-row.component.html',
  styleUrls: ['./monitor-row.component.css']
})
export class MonitorRowComponent implements OnInit {

  @Input() monitor: IMonitor;

  constructor() { }

  ngOnInit(): void {
  }

}
