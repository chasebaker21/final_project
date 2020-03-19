import { Component, OnInit, Input } from '@angular/core';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'bp-category-list',
  templateUrl: './bp-category-list.component.html',
  styleUrls: ['./bp-category-list.component.css']
})

export class BpCategoryListComponent implements OnInit {

  constructor(public PermitsAPIService: PermitsAPIService) {}
  
//  searchResults: any;
  permitAddress: string;


  ngOnInit(): void {
  }

  filterAddress() {
    this.permitAddress = this.permitAddress.toUpperCase();
    this.PermitsAPIService.filterAddress(this.permitAddress).subscribe((data: any) => this.PermitsAPIService.permitList = data);
  }
}