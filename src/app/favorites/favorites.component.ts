import { Component, OnInit, Input } from '@angular/core';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input()
  posts: any;

  constructor(public MJService: MJAPIService) { }

  ngOnInit(): void {
    this.posts = this.MJService.favoritesList;
  }
}