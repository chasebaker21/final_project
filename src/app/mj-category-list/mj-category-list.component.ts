import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category-list',
  templateUrl: './mj-category-list.component.html',
  styleUrls: ['./mj-category-list.component.css']
})

export class MjCategoryListComponent implements OnInit {

  permitAddress: string;
  filtering: boolean = false;

  constructor(public MJAPIService: MJAPIService) { }

  ngOnInit(): void {}

  filterAddress() {
    this.filtering = true;
    this.MJAPIService.filterAddress(this.permitAddress).subscribe((data: any) => this.MJAPIService.permitList = data.features);
  }
}