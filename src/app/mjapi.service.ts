import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IMary } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MJAPIService {

  private baseURL: string = "https://maps.grcity.us/arcgis/rest/services/ArcGIS_Online/ENG_Marijuana_Applications/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  constructor(private http: HttpClient) { }

  // pulls entire Marijuana API
  getMJAPI() {
    return this.http.get(
      this.baseURL
    );
  }
}
