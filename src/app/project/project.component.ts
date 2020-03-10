import { Component, OnInit } from '@angular/core';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

//Displays API in the component -- Need to fill in correct names from Sam's API functions
export class ProjectComponent implements OnInit {
permits = [];
getPermitsAPI;
PermitList;
  constructor(private PermitsAPIService: PermitsAPIService) { 
  this.permits = [];
  }
  ngOnInit(): void {
    this.PermitsAPIService.getPermitsAPI().subscribe((data: any) => this.PermitList = data)     
  }}


