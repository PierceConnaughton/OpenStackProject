import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { FirebaseApiService } from '../../../../Services/firebase-api.service';

@Component({
  selector: 'app-gpu-list',
  templateUrl: './gpu-list.component.html',
  styleUrls: ['./gpu-list.component.css']
})
export class GpuListComponent implements OnInit {

  

  MyGpus: any = [];
  idValue='';
  brandValue='';
  manufacturerValue='';
  seriesValue='';
  colorValue='';
  hardDriveValue='';
  

  constructor(public firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.loadGpus();
  }

  loadGpus() {
    return this.firebaseApiService.getGpus().subscribe((data: {}) => {
      this.MyGpus = data;
    })
  }

  // addGpu(){
  //   return this.firebaseApiService.addGpu(this.brandValue,this.manufacturerValue,this.seriesValue,this.colorValue,this.hardDriveValue).subscribe((data: {}) =>{
  //     this.MyGpus = data;
  //     this.brandValue='';
  //     this.manufacturerValue='';
  //     this.seriesValue='';
  //     this.colorValue='';
  //     this.hardDriveValue='';
  //   })
  // }

  deleteGpu(id:string){
    return this.firebaseApiService.delGpu(id).subscribe((data: {}) =>{
      this.MyGpus = data;
    })
  }

}
