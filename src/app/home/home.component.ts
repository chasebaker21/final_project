import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  openerPage: boolean = false;

  ngOnInit(): void {
  }

  test() {
    this.openerPage = true;
  }

}
