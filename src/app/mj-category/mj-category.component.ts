import { Component, OnInit } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category',
  templateUrl: './mj-category.component.html',
  styleUrls: ['./mj-category.component.css']
})
export class MjCategoryComponent implements OnInit {

  getMJAPI;
  permitList = [];
  
  constructor(private MJAPIService: MJAPIService) { 
  
  }
  ngOnInit(): void {
    this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features)   
  }}

