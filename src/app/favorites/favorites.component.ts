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

  mjShow = true;
  bpShow = true;

  constructor(public MJAPIService: MJAPIService, public PermitsAPIService: PermitsAPIService) { }

  ngOnInit() {
    this.posts = this.MJAPIService.MJFavoritesList;
    this.posts1 = this.PermitsAPIService.BPFavoritesList;

    if (window.screen.width >=768) {
      this.mjShow = !this.mjShow;
      this.bpShow = !this.bpShow;
    } else if (window.screen.width <768) {
      this.mjShow = this.mjShow;
      this.bpShow = this.mjShow;
    }
  }

  mjToggle() {
      this.mjShow = !this.mjShow;
  }

  bpToggle() {
    this.bpShow = !this.bpShow;
  }
}