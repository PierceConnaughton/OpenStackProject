import { Component, OnInit,Input } from '@angular/core';
import { AmazonGpusResponse } from '../../../../model/AmazonGpuResponse';

@Component({
  selector: 'amazon-gpu-row',
  templateUrl: './amazon-gpu-row.component.html',
  styleUrls: ['./amazon-gpu-row.component.css']
})
export class AmazonGpuRowComponent implements OnInit {

  
  @Input() gpu: AmazonGpusResponse;

  imageOneStar: string = "assets/img/OneStar.png";
  imageTwoStar: string = "assets/img/TwoStar.png";
  imageThreeStar: string = "assets/img/ThreeStar.png";
  imageHalfFourStar:string = "assets/img/FourHalfStar.png";
  imageFourStar: string = "assets/img/FourStar.png";
  imageFiveStar: string = "assets/img/FiveStar.png";

  constructor() { }

  ngOnInit(): void {
    
  }

  
  

}
