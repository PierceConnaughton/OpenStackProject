import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../app.state';
import { Cpu } from './../../../../model/cpu'
import * as CpuActions from './../../../../actions/cpu.actions'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpu-create',
  templateUrl: './cpu-create.component.html',
  styleUrls: ['./cpu-create.component.css']
})
export class CpuCreateComponent implements OnInit {

  CpuForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  addCpu(id, model,manufacturer,speed,processors) {
    this.store.dispatch(new CpuActions .AddCpu({id: id,model: model,manufacturer: manufacturer,speed:speed,processors:processors}) )
  }

  ngOnInit(): void {
  }
}
