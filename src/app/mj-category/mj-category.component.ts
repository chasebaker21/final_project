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
  favoritesList: any;
  permitList = [];
  
  constructor(public MJAPIService: MJAPIService) { }

  
  ngOnInit() {
    // this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features)
    //   let x = new Date(1582588800000);
    //   console.log(x.toLocaleDateString());
     
    for (let thingie of this.MJAPIService.favoritesList) {
      if(thingie.attributes.FullAddress == this.permit.attributes.FullAddress) {
        this.fave = true;
      }
    }
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

  }

  // displayDate() {
  //   this.MJAPIService.getMJAPI().subscribe((data: any) => this.permitList = data.features.permits.attributes.IntakeDate)   

  // }
