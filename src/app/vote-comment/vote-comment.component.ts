import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'vote-comment',
  templateUrl: './vote-comment.component.html',
  styleUrls: ['./vote-comment.component.css']
})
export class VoteCommentComponent implements OnInit {
  @Input() fave : boolean = false;
  @Input() post : any;

  constructor(private http: HttpClient, public MJAPIService: MJAPIService) { }
  commentForm: boolean = false;
  comment: string;
  upVoteCount: number = 0;
  downVoteCount: number = 0;
  applicationID: string;
  
  ngOnInit() {
    // for (let thingie of this.MJAPIService.favoritesList) {
    //   if(thingie.attributes.FullAddress == this.post.attributes.FullAddress) {
    //     this.fave = true;
    //     console.log("good");
    //   }
    // }
    }


  // *** WHEN ID IS SET THE COMMENTS AND VOTES "SHOULD" AUTO ASSIGN TO THAT ID *** ???

  // opens and closes the form for leaving name and comment
  commentBtn() {
    this.commentForm = !this.commentForm;
  }

  upVote() {
    // ****** need to also assign this vote to an application ID *****
    this.upVoteCount++
    this.http.post('http://localhost:5000/comments', { id: "this.applicationID", upVote: this.upVoteCount }).subscribe(res => console.log(res));
  }

  downVote() {
    // ***** need to also assign this vote to an application ID ******
    this.downVoteCount--
    this.http.post('http://localhost:5000/comments', { id: "this.applicationID", downVote: this.downVoteCount }).subscribe(res => console.log(res));

  }

  // sends the comment and application ID data to server.js
  submit() {
    this.http.post('http://localhost:5000/comments', { id: "this.applicationID", comment: this.comment }).subscribe(res => console.log(res));
  }

  addMJItem (post) {
    this.MJAPIService.addToFavoritesList(post);
    this.fave = true;
    console.log(this.MJAPIService.favoritesList.length);
  }

  removeMJItem (post) {
    this.MJAPIService.removeFromFavoritesList(post);
    this.fave = false;
    console.log(this.MJAPIService.favoritesList.length);
  }



}
