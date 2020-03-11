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
    this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features);
     
  }

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }

    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }


}

