import { Component, OnInit } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service1: MJAPIService) { }

  openerPage: boolean = false;

  ngOnInit(): void {
  }

  test() {
    this.openerPage = true;
  }

  fetchMarijuana() {
    // this.service.getRecipes();
    this.service1.getMJAPI();
  }

}
