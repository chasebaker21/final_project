import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermitsAPIService {
  private baseURL : string = "https://data.grandrapidsmi.gov/resource/dauu-a4tz.json";
  private appToken : string = "vCbvNklpbsoW5J7jcoERTiTjt";

  constructor(private http: HttpClient) { }
  
  // pulls entire API
  getPermitsAPI() {
    const url : string = `${this.baseURL}?$$app_token=${this.appToken}`;

    return this.http.get(url);
  }
}
