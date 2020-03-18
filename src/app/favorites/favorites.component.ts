import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input()
  posts: any;
  posts1: any;

  constructor(public MJAPIService: MJAPIService, public PermitsAPIService: PermitsAPIService) { }

  ngOnInit(): void {
    this.posts = this.MJAPIService.MJFavoritesList;
    this.posts1 = this.PermitsAPIService.BPFavoritesList;
  }
}