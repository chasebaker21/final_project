import { Component } from '@angular/core';
import { MJAPIService } from './mjapi.service';
import { PermitsAPIService } from './permits-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProject';
  open: boolean = false;
  mapsAPIKey: string = "AIzaSyCTVJiI3W9FFBkhaickK4mi3ufzGdWBAn8";



  constructor(public client: MJAPIService, public service1: MJAPIService, public service2: PermitsAPIService) { }

  fetchMarijuana() {
    this.service1.getMJAPI();
  }

  fetchBuildings() {
    this.service2.getPermitsAPI();
  }

  /* Open when someone clicks on the span element */
  openNav() {
    this.open = true;
  }

  /* Close when someone clicks on the "x" symbol or chooses am option */
  closeNav() {
    this.open = false;
  }
}