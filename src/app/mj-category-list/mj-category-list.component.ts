import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category-list',
  templateUrl: './mj-category-list.component.html',
  styleUrls: ['./mj-category-list.component.css']
})

export class MjCategoryListComponent implements OnInit {


  @Input()
  open : boolean = false;

  constructor(public MJAPIService: MJAPIService) { }

  ngOnInit(): void {
    // this.service.getRecipes();
  }
  
}