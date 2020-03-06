import { Component } from '@angular/core';
import { MJAPIService } from './mjapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProject';

  constructor(public client: MJAPIService) {}

  fetchAPI() {
    this.client.getMJAPI();
  }
}
