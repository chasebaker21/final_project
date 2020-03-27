import { Component, OnInit } from '@angular/core';
import { MJAPIService } from '../mjapi.service';
import { PermitsAPIService } from '../permits-api.service';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  show:boolean = false;
  tag: boolean = false;

  constructor(public service1: MJAPIService, public service2: PermitsAPIService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.queryParamMap;

    if (param.get('skipintro') == 'true') {
      this.display();
      this.displayTag()
    }

    const numbers = timer(3750);
    numbers.subscribe(x => this.display());
  }

  display() {
    this.show = true;
  }

  displayTag() {
    this.tag = true;
  }

  fetchMarijuana() {
    this.service1.getMJAPI();
  }

  fetchBuildings() {
    this.service2.getPermitsAPI();
  }
}