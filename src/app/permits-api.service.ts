import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermitsAPIService {
  private baseURL: string = "https://data.grandrapidsmi.gov/resource/dauu-a4tz.json";
  private appToken: string = "vCbvNklpbsoW5J7jcoERTiTjt";
  private boardType: string = "Planning Commission";
  private dateRange: string = "2019-03-01T00:00:00.000";
  fullAddress: string;

  constructor(private http: HttpClient) { }

  // pulls entire API
  getPermitsAPI() {
    const url: string = `${this.baseURL}?$$app_token=${this.appToken}&BoardType=${this.boardType}&$where=BoardIntakeDate>'${this.dateRange}'`;

    return this.http.get(url);
  }

  filterAddress(fullAddress : string) {
    const filterAddress: string = `${this.baseURL}${this.fullAddress}`;
    return this.http.get(filterAddress);
  }
}
