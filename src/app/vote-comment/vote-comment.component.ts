import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vote-comment',
  templateUrl: './vote-comment.component.html',
  styleUrls: ['./vote-comment.component.css']
})
export class VoteCommentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  commentForm: boolean = false;
  comment: string;
  name: string;
  upVoteCount: number = 0;
  downVoteCount: number = 0;

  @Input() id: any;

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


