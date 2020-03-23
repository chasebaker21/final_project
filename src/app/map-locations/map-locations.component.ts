import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';


@Component({
  selector: 'map-locations',
  templateUrl: './map-locations.component.html',
  styleUrls: ['./map-locations.component.css']
})
export class MapLocationsComponent implements OnInit {
  latitude : number = 42.963795;
  longitude : number = -85.670006;
  zoom : number = 14;
  center : any = {lng: this.longitude, lat: this.latitude}

   locations: any = [];

   coordinates = [
     {
       lat: 42.93356919,
       lng: -85.66663465
     }
   ]
  
  // markers = [
  //   { lng: -85.6797945188957, lat: 42.95149365769928, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67830904924729, lat: 42.95147479890077, alpha: 1 },
  //   { lng: -85.67817861892253, lat: 42.951463101490894, alpha: 1 },
  //   { lng: -85.67794840391285, lat:  42.95140308170747, alpha: 1 },
  //   { lng: -85.67730775795953, lat:  42.951190967442535, alpha: 1 }
  // ];


  constructor(public MJAPIService: MJAPIService) { }

  ngOnInit(): void {
    this.MJAPIService.fetchCordinates(this.coordinates).subscribe((data: any) => this.MJAPIService.permitList = data.features);
  }
}
