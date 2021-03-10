import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMonitor } from 'src/app/model/monitor';
import { MonitorService } from '../../../../Services/monitor.service';

@Component({
  selector: 'app-monitor-form',
  templateUrl: './monitor-form.component.html',
  styleUrls: ['./monitor-form.component.css']
})
export class MonitorFormComponent implements OnInit {

  @Input() monitor : IMonitor;

  @Output() monitorFormClose = new EventEmitter<IMonitor>();


  message: string = '';

  isNewMonitorForm: boolean = false;

  monitorForm: FormGroup;


  get brand() {
    return this.monitorForm.get('brand');
  }
  get monitorID() {
    return this.monitorForm.get('monitorID');
  }
  get size() {
    return this.monitorForm.get('size');
  }

  get refreshRate() {
    return this.monitorForm.get('refreshRate');
  }

  get version() {
    return this.monitorForm.get('version');
  }

  get color() {
    return this.monitorForm.get('color');
  }



  constructor() { }

  ngOnInit(): void {
    console.table(this.monitor);
    if (this.monitor == null) {
      this.monitor = {brand:'', monitorID: '', size: null, version:'',color:'',refreshRate:'',keywords:[], id: ''};
      this.isNewMonitorForm = true;
      }

  

  this.monitorForm = new FormGroup({
    brand: new FormControl(this.monitor.brand, [Validators.required]),
    monitorID: new FormControl(this.monitor.monitorID, [Validators.required]),
    size: new FormControl(this.monitor.size,[Validators.required]), 
    version: new FormControl(this.monitor.version,[Validators.required]),
    color: new FormControl(this.monitor.color,[Validators.required]),
    refreshRate: new FormControl(this.monitor.refreshRate),
  });
}


 
  


  onSubmit(){
      this.monitorFormClose.emit(this.monitorForm.value)
  }

  closeForm(){
    this.monitorFormClose.emit(null)
}

}
