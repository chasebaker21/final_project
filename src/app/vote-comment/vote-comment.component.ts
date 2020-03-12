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
  @Input() post;

  constructor(private http: HttpClient, public MJAPIService: MJAPIService) { }
  commentForm: boolean = false;
  comment: string;
  name: string;
  upVoteCount: number = 0;
  downVoteCount: number = 0;
<<<<<<< HEAD

  @Input() id: any;
=======
  applicationID: string;
  
  ngOnInit() {
    // for (let thingie of this.MJAPIService.favoritesList) {
    //   if(thingie.attributes.FullAddress == this.post.attributes.FullAddress) {
    //     this.fave = true;
    //     console.log("good");
    //   }
    // }
    }

>>>>>>> Ryan

  ngOnInit(): void {
  }
    // opens and closes the form for leaving name and comment
    commentBtn() {
      this.commentForm = !this.commentForm;
    }
  

    // updates the upvote count in server.js
  upVote() {
    this.upVoteCount++;
    console.log(this.upVoteCount);
    this.http.put('http://localhost:5000/votes/' + this.id , {  upVote: this.upVoteCount }).subscribe(res => console.log(res));
    
  }

   // updates the downvote count in server.js
  downVote() {
    this.downVoteCount++;
    console.log(this.downVoteCount);
    this.http.put('http://localhost:5000/votes/' + this.id, { downVote: this.downVoteCount }).subscribe(res => console.log(res));

  }

  // sends the comment and application ID data to server.js
  submit() {
    this.http.post('http://localhost:5000/comments', { id: this.id, comment: this.comment, name: this.name  }).subscribe(res => console.log(res));
  }
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



