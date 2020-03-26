import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';
import { PermitsAPIService } from '../permits-api.service';


@Component({
  selector: 'map-locations',
  templateUrl: './map-locations.component.html',
  styleUrls: ['./map-locations.component.css']
})
export class MapLocationsComponent implements OnInit {
  latitude : number = 42.963795;
  longitude : number = -85.670006;
  zoom : number = 11;
  center : any = {lng: this.longitude, lat: this.latitude}
  height: string = "500px";
  width: string = "100vw";
   locations = [];

   coordinates = [];
  


  constructor(public MJAPIService: MJAPIService, public PermitsAPIService: PermitsAPIService) {
    this.MJAPIService.getMJAPI();
    this.PermitsAPIService.getPermitsAPI();
  }

  ngOnInit(): void {
    for (let i of this.MJAPIService.permitList) {
      this.locations.push({lng: i.geometry.x, lat: i.geometry.y, alpha: 1});
    }

    for (let i of this.PermitsAPIService.permitList) {
      this.locations.push({lng: Number(i.lon), lat: Number(i.lat), alpha: 1});
    }
  }

  getLocations() {
    this.locations = this.MJAPIService.permitList;
    console.log(this.MJAPIService.permitList)
  }
} 
