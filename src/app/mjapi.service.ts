import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MJAPIService {
  MJFavoritesList = [];
  permitList = [];
  
  constructor(private http: HttpClient) { }

  private baseURL: string = "https://maps.grcity.us/arcgis/rest/services/ArcGIS_Online/ENG_Marijuana_Applications/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json";


  getMJAPI() {
    let baseURL = this.baseURL;
    return(this.http.get(baseURL).subscribe((data : any) => {
      console.log(data); 
      this.permitList = data.features;
      }));

    // return this.http.get(
    //   this.baseURL)
  }

  addToMJFavoritesList(post) {
    this.MJFavoritesList.push(post);
  }

  removeFromMJFavoritesList(post) {
    for(let i = 0; i < this.MJFavoritesList.length; i++) {
      if(this.MJFavoritesList[i] == post) {
        this.MJFavoritesList.splice(i, 1);
      }
    }
  }
}