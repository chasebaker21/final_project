import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category',
  templateUrl: './mj-category.component.html',
  styleUrls: ['./mj-category.component.css']
})

export class MjCategoryComponent implements OnInit {
  @Input() permit;
  @Input() post;
  @Input() fave : boolean = false;
  
  MJFavoritesList: any;
  permitList = [];

  
  constructor(public MJAPIService: MJAPIService) { }

  ngOnInit() {
    this.fave = this.MJAPIService.isAFavorite(this.permit);
  }

  addMJItem (permit) {
    this.MJAPIService.addToMJFavoritesList(permit);
    this.fave = true;
  }

  removeMJItem (permit) {
    this.MJAPIService.removeFromMJFavoritesList(permit);
    this.fave = false;
  }

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }
    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }
}
