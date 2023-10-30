import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogId: number | any = '';
  blogData: Blog | any = '';
  blogNotAvailable: any = '';
  constructor(private actRoute: ActivatedRoute, private blogService: BlogDataService) { };

  ngOnInit(): void {
    this.blogId = this.actRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogById(this.blogId)
      .subscribe(
        {
          next: (resp) => {
            this.blogData = resp;
            console.log(resp);
          },
          error: (err) => {
            console.error(err);
            if (err.status === 404)
              this.blogNotAvailable = `Sorry! Blog with the id ${this.blogId} is not found.`;
          },
          complete: () => {
            console.info('complete');
          }
        }
      );
  }
}
