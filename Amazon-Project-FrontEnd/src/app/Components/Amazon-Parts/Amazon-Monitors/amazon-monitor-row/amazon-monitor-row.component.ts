import { Component, OnInit,Input } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';

@Component({
  selector: 'amazon-monitor-row',
  templateUrl: './amazon-monitor-row.component.html',
  styleUrls: ['./amazon-monitor-row.component.css']
})
export class AmazonMonitorRowComponent implements OnInit {

  @Input() monitor: AmazonMonitorResponse;

  imageOneStar: string = "assets/img/OneStar.png";
  imageTwoStar: string = "assets/img/TwoStar.png";
  imageThreeStar: string = "assets/img/ThreeStar.png";
  imageHalfFourStar:string = "assets/img/FourHalfStar.png";
  imageFourStar: string = "assets/img/FourStar.png";
  imageFiveStar: string = "assets/img/FiveStar.png";

  constructor() { 
    
    
  }

  ngOnInit() {
    
  }

  

}
