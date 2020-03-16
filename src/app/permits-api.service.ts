import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PermitsAPIService {
  BPFavoritesList = [];
  permitList = [];
  private baseURL : string = "https://data.grandrapidsmi.gov/resource/dauu-a4tz.json";
  private appToken : string = "vCbvNklpbsoW5J7jcoERTiTjt";
  private boardType : string = "Planning Commission";
  private dateRange : string = "2019-03-01T00:00:00.000";

  constructor(private http: HttpClient) { }
  
  // pulls entire API
  getPermitsAPI() {
    const url : string = `${this.baseURL}?$$app_token=${this.appToken}&BoardType=${this.boardType}&$where=BoardIntakeDate>'${this.dateRange}'`;

    return (this.http.get(url).subscribe((data : any) => {
      console.log(data); 
      this.permitList = data;
      }));
  }

  addToBPFavoritesList(post) {
    this.BPFavoritesList.push(post);
  }

  removeFromBPFavoritesList(post) {
    for(let i = 0; i < this.BPFavoritesList.length; i++) {
      if(this.BPFavoritesList[i] == post) {
        this.BPFavoritesList.splice(i, 1);
      }
    }
  }
}
