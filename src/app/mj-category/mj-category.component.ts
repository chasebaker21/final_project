import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'mj-category',
  templateUrl: './mj-category.component.html',
  styleUrls: ['./mj-category.component.css']
})
export class MjCategoryComponent implements OnInit {
  @Input() permit;
  @Input() fave : boolean = false;
  // favoritesList: any;
  permitList = [];

  
  constructor(private MJAPIService: MJAPIService) { }

  
  ngOnInit(): void {
    this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features);
     
    // for (let thingie of this.MJAPIService.favoritesList) {
    //   if(thingie.attributes.FullAddress == this.post.attributes.FullAddress) {
    //     this.fave = true;
    //     console.log("good");
    //   }
    // }
  }

  addMJItem (permit) {
    this.MJAPIService.addToFavoritesList(permit);
    console.log("add");
    this.fave = true;
    console.log(this.MJAPIService.favoritesList.length);
  }

  removeMJItem (permit) {
    this.MJAPIService.removeFromFavoritesList(permit);
    console.log("remove");
    this.fave = false;
    console.log(this.MJAPIService.favoritesList.length);
  }

  

  formatDate(rawDate : string) : string {
    if (rawDate === null) {
      return "N/A";
    }

    const newDate = new Date(rawDate);
    return newDate.toLocaleDateString();
  }

}

