import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MJAPIService {
  favoritesList = [];
  // recipes = [];
  permitList = [];
  
  private baseURL: string = "https://maps.grcity.us/arcgis/rest/services/ArcGIS_Online/ENG_Marijuana_Applications/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  constructor(private http: HttpClient) { }

  getMJAPI() {
    return this.http.get(
      this.baseURL)
  }

  addToFavoritesList(post) {
    this.favoritesList.push(post);
  }

  removeFromFavoritesList(post) {
    for(let i = 0; i < this.favoritesList.length; i++) {
      if(this.favoritesList[i] == post) {
        this.favoritesList.splice(i, 1);
      }
    }
  }
}