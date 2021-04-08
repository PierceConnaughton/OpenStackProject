import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { FirebaseApiService } from '../../../../Services/firebase-api.service';
import {Cpu} from '../../../../model/cpu';

@Component({
  selector: 'app-cpu-form',
  templateUrl: './cpu-form.component.html',
  styleUrls: ['./cpu-form.component.css']
})
export class CpuFormComponent implements OnInit {

  @Input() cpu: Cpu;

  @Output() cpuFormClose = new EventEmitter<Cpu>();

  MyCpus: any = [];
  modelValue : string;
  manufacturerValue : string;
  speedValue : string;
  processorsValue : string;

  // addCpu(){
  //   return this.firebaseApiService.addCpu(this.modelValue,this.manufacturerValue,this.speedValue,this.processorsValue).subscribe((data: {}) =>{
  //     this.MyCpus = data;
  //     this.modelValue='';
  //     this.manufacturerValue='';
  //     this.speedValue='';
  //     this.processorsValue='';
      
  //   })
  //   window.location.reload();
  // }

  // updateCpu( id: string){
  //   this.firebaseApiService.updateCpu(id,this.modelValue,this.manufacturerValue,this.speedValue,this.processorsValue).subscribe((data: {}) =>{
  //         this.MyCpus = data;
  //         this.modelValue='';
  //         this.manufacturerValue='';
  //         this.speedValue='';
  //         this.processorsValue='';
          
  //       })
       
  //     window.location.reload();
  //   }

  message: string = '';

  isNewCpuForm: boolean = false;

  cpuForm: FormGroup;


  get model() {
    return this.cpuForm.get('model');
  }
  get manufacturer() {
    return this.cpuForm.get('manufacturer');
  }
  get speed() {
    return this.cpuForm.get('speed');
  }

  get processors() {
    return this.cpuForm.get('processors');
  }

  constructor(public firebaseApiService: FirebaseApiService) { }

  ngOnInit(): void {
    console.table(this.cpu);
    if (this.cpu == null) {
      this.cpu = {model:'',  manufacturer:'', speed:'',processors:'', id: ''};
      this.isNewCpuForm = true;
   }

  

  this.cpuForm = new FormGroup({
    model: new FormControl(this.cpu.model, [Validators.required]),
    manufacturer: new FormControl(this.cpu.manufacturer,[Validators.required]), 
    speed: new FormControl(this.cpu.speed,[Validators.required]),
    processors: new FormControl(this.cpu.processors,[Validators.required]),
  });
}

onSubmit(){
  //this.addCpu();
  
  this.cpuFormClose.emit(this.cpuForm.value)
  
}

closeForm(){
this.cpuFormClose.emit(null)
}

}
