import { Component, OnInit, Input } from '@angular/core';
import {PermitsAPIService} from '../permits-api.service';

@Component({
  selector: 'building-category',
  templateUrl: './building-category.component.html',
  styleUrls: ['./building-category.component.css']
})
export class BuildingCategoryComponent implements OnInit {
  @Input() permit;
  @Input() post;
  @Input() fave : boolean = false;
  BPFavoritesList: any;
  permitList = [];
  getPermitsAPI;
  
  constructor(private PermitsAPIService: PermitsAPIService) { 
  
  }
  ngOnInit(): void {
    // this.PermitsAPIService.getPermitsAPI().subscribe((data: any) => this.permitList = data);

    // for (let thingie of this.PermitsAPIService.BPFavoritesList) {
    //   if(thingie.attributes.FullAddress == this.permit.attributes.FullAddress) {
    //     this.fave = true;
    //   }
    // }
  }
    
  addBPItem (permit) {
    this.PermitsAPIService.addToBPFavoritesList(permit);
    console.log("add");
    this.fave = true;
    console.log(this.PermitsAPIService.BPFavoritesList.length);
  }

  removeBPItem (permit) {
    this.PermitsAPIService.removeFromBPFavoritesList(permit);
    console.log("remove");
    this.fave = false;
    console.log(this.PermitsAPIService.BPFavoritesList.length);
  }

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }

    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }    
}

