import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vote-comment',
  templateUrl: './vote-comment.component.html',
  styleUrls: ['./vote-comment.component.css']
})
export class VoteCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  upVoteCount = 0;
  downVoteCount = 0;
  upVote(){
    this.upVoteCount ++;
    console.log(this.upVoteCount);
  }
  downVote() {
  this.downVoteCount ++;
  console.log (this.downVoteCount);
}}


