import { Component, OnInit,Input } from '@angular/core';
import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';


@Component({
  selector: 'amazon-cases-row',
  templateUrl: './amazon-cases-row.component.html',
  styleUrls: ['./amazon-cases-row.component.css']
})
export class AmazonCasesRowComponent implements OnInit {

  @Input() case: AmazonCasesResponse;

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
