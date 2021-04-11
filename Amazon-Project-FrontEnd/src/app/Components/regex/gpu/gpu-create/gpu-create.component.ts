import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../app.state';
import { Gpu } from './../../../../model/gpu'
import * as GpuActions from './../../../../actions/gpu.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'gpu-create',
  templateUrl: './gpu-create.component.html',
  styleUrls: ['./gpu-create.component.css']
})
export class GpuCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addGpu(id, brand,manufacturer,series,color,hardDrive) {
    this.store.dispatch(new GpuActions .AddGpu({id: id,brand: brand,manufacturer: manufacturer,series:series,color:color,hardDrive:hardDrive}) )
  }

  ngOnInit(): void {
  }

}
