import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  commentBtn() {
    this.commentForm = !this.commentForm;
  }

  submit() {
    this.http.post('http://localhost:5000/comments', { id: 'some-id', comment: this.comment }).subscribe( res => console.log(res) );
  }

}
