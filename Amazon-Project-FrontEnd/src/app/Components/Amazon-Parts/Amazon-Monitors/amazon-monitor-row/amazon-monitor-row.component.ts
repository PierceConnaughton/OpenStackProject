import { Component, OnInit,Input } from '@angular/core';
import { AmazonMonitorResponse } from '../../../../model/AmazonMonitorResponse';

@Component({
  selector: 'amazon-monitor-row',
  templateUrl: './amazon-monitor-row.component.html',
  styleUrls: ['./amazon-monitor-row.component.css']
})
export class AmazonMonitorRowComponent implements OnInit {

  @Input() monitor: AmazonMonitorResponse;

  imageOneStar: string = "https://image.shutterstock.com/image-vector/one-stars-rating-button-experience-260nw-1705308238.jpg";
  imageTwoStar: string = "https://image.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";
  imageThreeStar: string = "https://image.shutterstock.com/image-vector/three-stars-icon-vector-260nw-1316819480.jpg";
  imageHalfFourStar:string = "https://newnoisemagazine.com/wp-content/uploads/2019/10/4-half-stars.jpg";
  imageFourStar: string = "https://library.kissclipart.com/20180904/xwe/kissclipart-3-out-of-5-stars-clipart-far-cry-5-review-mafia-ii-29bfffd9031764c0.jpg";
  imageFiveStar: string = "https://drammanda.files.wordpress.com/2012/07/5-red-stars.jpg";

  constructor() { 
    
    
  }

  ngOnInit() {
    
  }

  

}
