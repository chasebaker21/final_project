import { Component, OnInit, Input } from '@angular/core';
// import { Recipes } from '../Recipes';
import { MJAPIService } from '../mjapi.service';
import { PermitsAPIService } from '../permits-api.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  // @Input()
  mjPosts: any;
  bpPosts: any;

  // @Input()
  // recipes : Recipes[] = [];
  // recipeList : Recipes[] = [];

  constructor(public service1: MJAPIService, public service2: PermitsAPIService) { }

  ngOnInit(): void {
    this.mjPosts = this.service1.mjFavoritesList;
    this.bpPosts = this.service2.bpFavoritesList;

  }
}