import { Component, OnInit } from '@angular/core';
import { ServiceDetailService } from 'src/app/bank/service-detail.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
  
  constructor(private bank:ServiceDetailService) { }
  bloodData: any;
  ngOnInit(): void {
    this.bloodData=this.bank.bloodDetails;
  }
}