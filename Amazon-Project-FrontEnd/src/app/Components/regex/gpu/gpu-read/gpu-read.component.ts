import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gpu } from '../../../../model/gpu';
import { AppState } from './../../../../app.state';
import { Observable } from 'rxjs';
import * as GpuActions from './../../../../actions/gpu.actions';

@Component({
  selector: 'gpu-read',
  templateUrl: './gpu-read.component.html',
  styleUrls: ['./gpu-read.component.css']
})
export class GpuReadComponent implements OnInit {

  MyGpus: any = [];

  
  message: string;

  showGpuForm: boolean = false;

  currentGpu : Gpu;

  deleteGpuBool: boolean = false;

  modelValue : string;
  manufacturerValue : string;
  speedValue : string;
  processorsValue : string;
  


  // search text property
  searchTextGpuID: string;
  searchTextBrand: string;

  searchTextManufacturer: string;
  searchTextSeries: string;
  searchTextColor: string;
  searchTextHardDrive: string;

  order: string = 'id';
  reverse: boolean = false;

  clicked (gpu: Gpu): void {
    this.currentGpu = gpu;
  }

  openDeleteGpu(id: string):void {
    this.deleteGpuBool = true;
    console.log('need to delete gpu with id '+ this.currentGpu.id);
    this.delGpu(this.currentGpu.id)
 
  }

  setOrder(value: string) {
    this.order = value;
  }

  isSelected(gpu: Gpu): boolean{
    if (!gpu || !this.currentGpu) {
      return false;
    }
    else {
      return gpu.id === this.currentGpu.id;
    }
  }

  gpus: Observable<Gpu[]>;

  constructor(private store: Store<AppState>) {
    this.gpus = store.select('gpu')
   }

   delGpu(index) {
    this.store.dispatch(new GpuActions.RemoveGpu(index) )
    this.currentGpu =  null
  }

  ngOnInit()  {
  }

}
