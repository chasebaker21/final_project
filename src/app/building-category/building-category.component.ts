import { Component, OnInit, Input } from '@angular/core';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'building-category',
  templateUrl: './building-category.component.html',
  styleUrls: ['./building-category.component.css']
})

export class BuildingCategoryComponent implements OnInit {
  @Input() permit;
  @Input() post;
  @Input() fave: boolean = false;

  BPFavoritesList: any;
  permitList = [];
  getPermitsAPI;
  searchResults: any;
  permitAddress: string;

  constructor(public PermitsAPIService: PermitsAPIService) { }

  ngOnInit(): void {
    this.fave = this.PermitsAPIService.isAFavorite(this.permit);
  }

  formatDate(rawDate: string): string {
    if (rawDate === null) {
      return "N/A";
    }

    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }
}