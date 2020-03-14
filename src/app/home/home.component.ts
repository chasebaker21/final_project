import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  display() {
  this.show = true;
}
}
