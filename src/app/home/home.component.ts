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

  constructor(public service1: MJAPIService, public service2: PermitsAPIService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.queryParamMap;

    if (param.get('skipintro') == 'true') {
      this.display();
    }

    const numbers = timer(3000);
    numbers.subscribe(x => this.display());
  }

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
