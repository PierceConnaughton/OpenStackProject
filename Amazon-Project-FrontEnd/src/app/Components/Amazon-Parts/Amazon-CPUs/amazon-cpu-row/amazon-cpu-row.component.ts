import { Component, OnInit,Input } from '@angular/core';
import { AmazonCpusResponse } from '../../../../model/AmazonCpuResponse';

@Component({
  selector: 'amazon-cpu-row',
  templateUrl: './amazon-cpu-row.component.html',
  styleUrls: ['./amazon-cpu-row.component.css']
})
export class AmazonCpuRowComponent implements OnInit {

  @Input() cpu: AmazonCpusResponse;

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
