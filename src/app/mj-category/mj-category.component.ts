import { Component, OnInit } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category',
  templateUrl: './mj-category.component.html',
  styleUrls: ['./mj-category.component.css']
})
export class MjCategoryComponent implements OnInit {

  
  permitList = [];
  
  constructor(private MJAPIService: MJAPIService) { }

  
  ngOnInit(): void {
    this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features)   
    let x = new Date(1582588800000);
    console.log(x.toLocaleDateString());
     
  }

  // displayDate() {
  //   this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features.permits.attributes.IntakeDate)   

  // }


}

