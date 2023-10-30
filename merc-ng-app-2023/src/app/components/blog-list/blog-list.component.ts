import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  // blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  allBlogs: any;

  constructor(private blogService : BlogDataService) { 
  }

  ngOnInit(): void {
    this.blogService.getAllBlogs()
      .subscribe((resp) => {
        console.log(resp);
        this.allBlogs = resp;
      });
  }

  // getAllBlogs = () => {
  //   this.http.get(this.blogUrl)
  //     .subscribe((resp) => {
  //       console.log(resp);
  //       this.allBlogs = resp;
  //     });
  // };
}