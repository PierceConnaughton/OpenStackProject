import { Component, OnInit } from '@angular/core';
import {Gpu} from '../../../../model/gpu';
import { retry } from 'rxjs/operators';
import { FirebaseApiService } from '../../../../Services/firebase-api.service';

@Component({
  selector: 'app-gpu-list',
  templateUrl: './gpu-list.component.html',
  styleUrls: ['./gpu-list.component.css']
})
export class GpuListComponent implements OnInit {

  

  MyGpus: any = [];

  
  message: string;

  showGpuForm: boolean = false;

  currentGpu : Gpu;

  deleteGpuBool: boolean = false;

  brandValue : string;
  manufacturerValue : string;
  seriesValue : string;
  colorValue : string;
  hardDriveValue : string;

  
  // search text property
  searchTextGpuID: string;
  searchTextBrand: string;

  searchTextManufacturer: string;
  searchTextSeries: string;
  searchTextColor: string;
  searchTextHardDrive: string;

  

  constructor(public firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.loadGpus();
  }

  loadGpus() {
    return this.firebaseApiService.getGpus().subscribe((data: {}
      ) => {
      this.MyGpus = data;
      
    })
  }

  order: string = 'id';
  reverse: boolean = false;

  clicked (gpu: Gpu): void {
    this.currentGpu = gpu;
  }

  openCreateGpu(): void {
    this.currentGpu = null;
    this.showGpuForm = true;
    
  }

  openEditGpu(): void{
    this.showGpuForm = true;
    
  }

  openDeleteGpu(id: string):void {
    this.deleteGpuBool = true;
    console.log('need to delete gpu with id '+ this.currentGpu.id);
    this.deleteGpu(this.currentGpu.id)
 
  }



  gpuFormClose(gpu: Gpu): void{
    this.showGpuForm = null;
    console.table(gpu);

    if(gpu == null){
      this.currentGpu = null;
    }
  }

  setOrder(value: string) {
    this.order = value;
  }

  updateGpu( id: string, brand:string,manufacturer: string, series:string,color: string, hardDrive:string){
    return this.firebaseApiService.updateGpu(id,this.brandValue,this.manufacturerValue,this.seriesValue,this.colorValue,this.hardDriveValue).subscribe((data: {}) =>{
          this.MyGpus = data;
          this.brandValue='';
          this.manufacturerValue='';
          this.seriesValue='';
          this.colorValue='';
          this.hardDriveValue='';
        })
    this.loadGpus();
    
  }
  

  isSelected(gpu: Gpu): boolean{
    if (!gpu || !this.currentGpu) {
      return false;
    }
    else {
      return gpu.id === this.currentGpu.id;
    }
  }

  deleteGpu(id:string){
    return this.firebaseApiService.delGpu(id).subscribe((data: {}) =>{
      this.MyGpus = data;
    })
  }


  // deleteGpu(id: string){
  //   this.firebaseApiService.delGpu(id)
  //   .subscribe({
  //     next: gpu => this.message = "gpu has been deleted",
  //     error: (err) => this.message = err
  //   });

  //   this.loadGpus();

    
  // }



  // createNewGpu(): void {
  //   this.firebaseApiService.addGpu(this.brandValue,this.manufacturerValue,this.seriesValue,this.colorValue,this.hardDriveValue).subscribe((data: {}) =>{
  //     this.MyGpus = data;
  //     this.brandValue='';
  //     this.manufacturerValue='';
  //     this.seriesValue='';
  //     this.colorValue='';
  //     this.hardDriveValue='';
  //   })
  //   this.showGpuForm = false;

    
  // this.loadGpus();

  // window.location.reload();
  // }
  

  

}
