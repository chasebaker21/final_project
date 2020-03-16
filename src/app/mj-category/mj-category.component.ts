import { Component, OnInit, Input } from '@angular/core';
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
    // this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features)
     
    // for (let thingie of this.MJAPIService.MJFavoritesList) {
    //   if(thingie.attributes.FullAddress == this.permit.attributes.FullAddress) {
    //     this.fave = true;
    //   }
    // }
  }

  addMJItem (permit) {
    this.MJAPIService.addToMJFavoritesList(permit);
    console.log("add");
    this.fave = true;
    console.log(this.MJAPIService.MJFavoritesList.length);
  }

  removeMJItem (permit) {
    this.MJAPIService.removeFromMJFavoritesList(permit);
    console.log("remove");
    this.fave = false;
    console.log(this.MJAPIService.MJFavoritesList.length);
  }

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }
    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }
}