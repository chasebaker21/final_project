import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  open: boolean = false;

  ngOnInit(): void {
  }

  /* Open when someone clicks on the span element */
 openNav() {
   this.open = true;
}

/* Close when someone clicks on the "x" symbol inside the overlay */
closeNav() {
  this.open = false;
}

}
