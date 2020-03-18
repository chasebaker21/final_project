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
<<<<<<< HEAD
  show: boolean;
  
=======
  fave: boolean;
>>>>>>> 61860fc21fb60d8f8e457f85d0e1f809b77edf62

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

  addMJItem() {
    this.fave = true;
<<<<<<< HEAD
    this.show=true;
    console.log(this.MJAPIService.favoritesList.length);

=======
    console.log("No functionality yet, maybe add event emitter");
>>>>>>> 61860fc21fb60d8f8e457f85d0e1f809b77edf62
  }

  removeMJItem() {
    this.fave = false;
    console.log("No functionality yet, maybe add event emitter");
  }
<<<<<<< HEAD

  addedSnackbar() {
    this.show=true;
  }
  removedSnackbar() {
    this.show=false;
  }


=======
>>>>>>> 61860fc21fb60d8f8e457f85d0e1f809b77edf62
}
