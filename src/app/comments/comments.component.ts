import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Comments } from '../comments';

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
}
