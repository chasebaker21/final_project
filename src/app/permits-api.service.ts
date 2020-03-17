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
      this.permitList = data;
    }));
  }

  addToBPFavoritesList(post) {
    this.BPFavoritesList.push(post);
  }

  removeFromBPFavoritesList(post) {
    for(let i = 0; i < this.BPFavoritesList.length; i++) {
      if(this.BPFavoritesList[i].permitnum == post.permitnum) {
        this.BPFavoritesList.splice(i, 1);
      }
    }
  }

  isAFavorite(post) : boolean {
    for(let i of this.BPFavoritesList) {
      if(i.permitnum == post.permitnum) {
        return true;
      }
    }
    return false;
  }
}