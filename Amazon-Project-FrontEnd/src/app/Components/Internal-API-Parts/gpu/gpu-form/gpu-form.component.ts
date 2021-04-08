import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { FirebaseApiService } from '../../../../Services/firebase-api.service';
import {Gpu} from '../../../../model/gpu';

@Component({
  selector: 'app-gpu-form',
  templateUrl: './gpu-form.component.html',
  styleUrls: ['./gpu-form.component.css']
})
export class GpuFormComponent implements OnInit {

  @Input() gpu: Gpu;

  @Output() gpuFormClose = new EventEmitter<Gpu>();

  MyGpus: any = [];
  brandValue : string;
  manufacturerValue : string;
  seriesValue : string;
  colorValue : string;
  hardDriveValue : string;

  message: string = '';

  isNewGpuForm: boolean = false;

  gpuForm: FormGroup;


  get brand() {
    return this.gpuForm.get('brand');
  }
  get manufacturer() {
    return this.gpuForm.get('manufacturer');
  }
  get color() {
    return this.gpuForm.get('color');
  }

  get series() {
    return this.gpuForm.get('series');
  }

  get hardDrive() {
    return this.gpuForm.get('hardDrive');
  }

  



  constructor(public firebaseApiService: FirebaseApiService) { }

  ngOnInit(): void {
    console.table(this.gpu);
    if (this.gpu == null) {
      this.gpu = {brand:'',  manufacturer:'', series:'',color:'',hardDrive:'', id: ''};
      this.isNewGpuForm = true;
      }

  

  this.gpuForm = new FormGroup({
    brand: new FormControl(this.gpu.brand, [Validators.required]),
    manufacturer: new FormControl(this.gpu.manufacturer,[Validators.required]), 
    series: new FormControl(this.gpu.series,[Validators.required]),
    color: new FormControl(this.gpu.color,[Validators.required]),
    hardDrive: new FormControl(this.gpu.hardDrive,[Validators.required]),
  });
}

onSubmit(){
  //this.addGpu();
  this.gpuFormClose.emit(this.gpuForm.value)
}

closeForm(){
this.gpuFormClose.emit(null)
}
}
