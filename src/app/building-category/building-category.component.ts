import { Component, OnInit, Input } from '@angular/core';
import {PermitsAPIService} from '../permits-api.service';

@Component({
  selector: 'building-category',
  templateUrl: './building-category.component.html',
  styleUrls: ['./building-category.component.css']
})
export class BuildingCategoryComponent implements OnInit {
  
  getPermitsAPI;
  permitList = [];
  
  constructor(private PermitsAPIService: PermitsAPIService) { 
  
  }
  ngOnInit(): void {
    this.PermitsAPIService.getPermitsAPI().subscribe((data: any) => this.permitList = data); 
  }

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }

    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }    
}

