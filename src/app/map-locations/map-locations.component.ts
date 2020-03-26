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
  zoom : number = 11;
  center : any = {lng: this.longitude, lat: this.latitude}
  height: string = "500px";
  width: string = "100vw"


    // locations for Marijuana permits hard coded for now
   locations = [
     {lng: -85.6835833,  lat: 42.92765632,  alpha: 1},
     {lng: -85.67514339, lat: 42.93912915, alpha: 1},
     {lng: -85.64179562, lat: 42.97065604, alpha: 1},
     {lng: -85.60662984, lat: 42.91217271, alpha: 1},
     {lng: -85.68860546, lat: 42.95646988, alpha: 1},
     {lng: -85.60919206, lat: 42.90916063, alpha: 1},
     {lng: -85.59430761, lat: 43.00390898, alpha: 1},
     {lng: -85.57455428, lat: 42.91299338, alpha: 1},
     {lng: -85.68518192, lat: 42.98495312, alpha: 1},
     {lng: -85.61881192, lat: 42.91224858, alpha: 1},
     {lng: -85.65143031, lat: 42.97023334, alpha: 1},
     {lng: -85.66526535, lat: 42.91080304, alpha: 1},
     {lng: -85.67762836, lat: 42.9951662,  alpha: 1},
     {lng: -85.65655691, lat: 42.91324141, alpha: 1},
     {lng: -85.61582219, lat: 42.9756474,  alpha: 1},
     {lng: -85.68867246, lat: 42.99658552, alpha: 1},
     {lng: -85.68520273, lat: 42.99897214, alpha: 1},
     {lng: -85.66663465, lat: 42.93356919, alpha: 1},
     {lng: -85.64069497, lat: 42.90647437, alpha: 1},
     {lng: -85.59806535, lat: 42.91346291, alpha: 1},
     {lng: -85.6761013,  lat: 42.98790325, alpha: 1},
     {lng: -85.6331156,  lat: 43.024927,   alpha: 1},
     {lng: -85.64394669, lat: 42.91201799, alpha: 1},
     {lng: -85.58271414, lat: 42.9161283,  alpha: 1},
     {lng: -85.66679051, lat: 42.92248053, alpha: 1},
     {lng: -85.67345083, lat: 42.95381939, alpha: 1},
     {lng: -85.66654233, lat: 42.98566459, alpha: 1},
     {lng: -85.60873179, lat: 42.88446167, alpha: 1},
     {lng: -85.64545758, lat: 42.88800305, alpha: 1},
     {lng: -85.68410945, lat: 42.96362182, alpha: 1},
     {lng: -85.6423425,  lat: 42.89152355, alpha: 1},
     {lng: -85.66597392, lat: 42.91949133, alpha: 1},
     {lng: -85.65663138, lat: 42.93578597, alpha: 1},
     {lng: -85.68520273, lat: 42.99897214, alpha: 1},
   ];

   coordinates = [];
  


  constructor(public MJAPIService: MJAPIService) { }

  ngOnInit(): void {
  }

  getLocations() {
    this.locations = this.MJAPIService.permitList;
    console.log(this.MJAPIService.permitList)
  }
} 
