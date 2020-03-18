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
<<<<<<< HEAD
  
=======
  posts1: any;
>>>>>>> 61860fc21fb60d8f8e457f85d0e1f809b77edf62

  constructor(public MJAPIService: MJAPIService, public PermitsAPIService: PermitsAPIService) { }

  ngOnInit(): void {
    this.posts = this.MJAPIService.MJFavoritesList;
    this.posts1 = this.PermitsAPIService.BPFavoritesList;
  }
}