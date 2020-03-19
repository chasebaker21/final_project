import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MJAPIService } from '../mjapi.service';

@Component({
  selector: 'vote-comment',
  templateUrl: './vote-comment.component.html',
  styleUrls: ['./vote-comment.component.css']
})
export class VoteCommentComponent implements OnInit {
  @Input() post : any;
  @Input() id;

  constructor(private http: HttpClient, public MJAPIService: MJAPIService) { }
  commentForm: boolean = false;
  comment: string;
  upVoteCount: number = 0;
  downVoteCount: number = 0;
  name: string;

  // when page first loads ngOnInit() will check the node server.js for any vote counts and will update
  // the upVoteCount/downVoteCount
  ngOnInit() {
    this.http.get('http://localhost:5000/votes/').subscribe((data: any) => {
      if (data[this.id]) {
        this.upVoteCount = data[this.id].upVote;
        this.downVoteCount = data[this.id].downVote;
      }
    }
    );
  }

  // opens and closes the form for leaving name and comment
  commentBtn() {
    this.commentForm = !this.commentForm;
  }
  // updates the upVote count on the server.js as well as the upVoteCount here
  upVote() {
    this.upVoteCount++
    this.http.put('http://localhost:5000/votes/' + this.id, { upVote: 1 }).subscribe(res => console.log(res));
  }
  // updates the downVote count on the server.js as well as the downVoteCount here
  downVote() {
    this.downVoteCount--
    this.http.put('http://localhost:5000/votes/' + this.id, { downVote: 1 }).subscribe(res => console.log(res));
  }

  // sends the comment and application ID data to server.js
  submit() {
    this.http.post('http://localhost:5000/comments', { id: this.id, comment: this.comment, name: this.name }).subscribe(res => console.log(res));
  }
}
