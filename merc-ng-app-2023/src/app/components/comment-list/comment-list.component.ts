import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit{
  @Input()
  postId: number = 0;
  blogComment: Comment | any = '';

  constructor(private blogService: BlogDataService){

  }

  ngOnInit(): void {
    this.blogService.getCommentByBlogId(this.postId)
      .subscribe((resp) => {
        console.log(resp);
        this.blogComment = resp;
      });
  }
}
