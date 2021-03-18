import { Component, OnInit,Input } from '@angular/core';
import { AmazonCasesResponse } from '../../../../model/AmazonCasesResponse';

@Component({
  selector: 'amazon-cases-row',
  templateUrl: './amazon-cases-row.component.html',
  styleUrls: ['./amazon-cases-row.component.css']
})
export class AmazonCasesRowComponent implements OnInit {

  @Input() case: AmazonCasesResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
