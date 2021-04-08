import { Component, OnInit } from '@angular/core';
import {Cpu} from '../../../../model/cpu';
import { retry } from 'rxjs/operators';
import { FirebaseApiService } from '../../../../Services/firebase-api.service';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

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

  constructor(public firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.loadCpus();
  }

  loadCpus() {
    return this.firebaseApiService.getCpus().subscribe((data: {}
      ) => {
      this.MyCpus = data;
      
    })
  }

  order: string = 'id';
  reverse: boolean = false;

  clicked (cpu: Cpu): void {
    this.currentCpu = cpu;
  }

  openCreateCpu(): void {
    this.currentCpu = null;
    this.showCpuForm = true;
    
  }

  openEditCpu(): void{
    this.showCpuForm = true;
    
  }

  openDeleteCpu(id: string):void {
    this.deleteCpuBool = true;
    console.log('need to delete cpu with id '+ this.currentCpu.id);
    this.deleteCpu(this.currentCpu.id)
 
  }



  cpuFormClose(cpu: Cpu): void{

    

    this.showCpuForm = null;
    console.table(cpu);

    if(cpu == null){
      this.currentCpu = null;
    }

    window.location.reload();
  }

  setOrder(value: string) {
    this.order = value;
  }

  // updateCpu( id: string, model:string,manufacturer: string, speed:string,processors: string){
  //   return this.firebaseApiService.updateCpu(id,this.modelValue,this.manufacturerValue,this.speedValue,this.processorsValue).subscribe((data: {}) =>{
  //         this.MyCpus = data;
  //         this.modelValue='';
  //         this.manufacturerValue='';
  //         this.seriesValue='';
  //         this.processorsValue='';
  //        
  //       })
  //   this.loadCpus();
    
  // }
  

  isSelected(cpu: Cpu): boolean{
    if (!cpu || !this.currentCpu) {
      return false;
    }
    else {
      return cpu.id === this.currentCpu.id;
    }
  }

  deleteCpu(id:string){
    return this.firebaseApiService.delCpu(id).subscribe((data: {}) =>{
      this.MyCpus = data;
    })
  }


  // deleteCpu(id: string){
  //   this.firebaseApiService.delCpu(id)
  //   .subscribe({
  //     next: cpu => this.message = "cpu has been deleted",
  //     error: (err) => this.message = err
  //   });

  //   this.loadCpus();

    
  // }



  // createNewCpu(): void {
  //   this.firebaseApiService.addCpu(this.modelValue,this.manufacturerValue,this.speedValue,this.processorsValue).subscribe((data: {}) =>{
  //     this.MyCpus = data;
  //     this.modelValue='';
  //     this.manufacturerValue='';
  //     this.speedValue='';
  //     this.processorsValue='';
  //     
  //   })
  //   this.showCpuForm = false;

    
  // this.loadCpus();

  // window.location.reload();
  // }
  

}