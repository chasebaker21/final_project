import { Component, OnInit, Input } from '@angular/core';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'app-bp-category-list',
  templateUrl: './bp-category-list.component.html',
  styleUrls: ['./bp-category-list.component.css']
})

export class BpCategoryListComponent implements OnInit {

  constructor(public PermitsAPIService: PermitsAPIService) {}

  ngOnInit(): void {
  }
}