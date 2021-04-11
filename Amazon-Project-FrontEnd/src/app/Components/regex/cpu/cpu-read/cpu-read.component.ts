import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cpu } from '../../../../model/cpu';
import { AppState } from './../../../../app.state';
import { Observable } from 'rxjs';
import * as CpuActions from './../../../../actions/cpu.actions';

@Component({
  selector: 'cpu-read',
  templateUrl: './cpu-read.component.html',
  styleUrls: ['./cpu-read.component.css']
})
export class CpuReadComponent implements OnInit {

  MyCpus: any = [];

  
  message: string;

  showCpuForm: boolean = false;

  currentCpu : Cpu;

  deleteCpuBool: boolean = false;

  modelValue : string;
  manufacturerValue : string;
  speedValue : string;
  processorsValue : string;
  

  
  // search text property
  searchTextCpuID: string;
  searchTextModel: string;

  searchTextManufacturer: string;
  searchTextSpeed: string;
  searchTextProcessors: string;

  order: string = 'id';
  reverse: boolean = false;

  clicked (cpu: Cpu): void {
    this.currentCpu = cpu;
  }

  openDeleteCpu(index):void {
    this.deleteCpuBool = true;
    console.log('need to delete cpu with id '+ index);
    this.delCpu(index)
 
  }

  setOrder(value: string) {
    this.order = value;
  }

  isSelected(cpu: Cpu): boolean{
    if (!cpu || !this.currentCpu) {
      return false;
    }
    else {
      return cpu.id === this.currentCpu.id;
    }
  }

  cpus: Observable<Cpu[]>;

  constructor(private store: Store<AppState>) {
    this.cpus = store.select('cpu')
   }

   delCpu(index) {
    this.store.dispatch(new CpuActions.RemoveCpu(index) )
    this.currentCpu =  null
  }

  ngOnInit()  {
  }
}
