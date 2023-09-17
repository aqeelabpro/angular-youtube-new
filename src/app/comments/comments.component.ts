import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Comments } from '../comments';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.dataService.fetchData().subscribe((comments) => {
      console.log(comments);
      this.comments = comments;
    });
  }

  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    body: new FormControl(''),
  });

  get name() {
    return this.formGroup.get('name');
  }
  get email() {
    return this.formGroup.get('email');
  }

  get body() {
    return this.formGroup.get('body');
  }

  sendComments() {
    this.dataService
      .saveComments(<any>this.formGroup.value)
      .subscribe((comments) => {
        console.log(comments);
      });
  }

  deleteComment(commentId: number) {
    this.dataService.deleteCommentByCommentId(commentId).subscribe((data) => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
      console.log('Comment Deleted Successfully with commentId' + commentId);
    });
  }
}
