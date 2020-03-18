import { Component, OnInit } from '@angular/core';
import { MJAPIService } from '../mjapi.service';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  show:boolean = false;

  constructor(public service1: MJAPIService, public service2: PermitsAPIService) { }

  ngOnInit(): void {}

  display() {
    this.show = true;
  }

  fetchMarijuana() {
    this.service1.getMJAPI();
  }

  fetchBuildings() {
    this.service2.getPermitsAPI();
  }
}
