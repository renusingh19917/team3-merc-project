import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-writer-details',
  templateUrl: './writer-details.component.html',
  styleUrls: ['./writer-details.component.css']
})
export class WriterDetailsComponent implements OnInit {

  @Input()
  writerId: any = '';

  writerData: any = '';

  constructor(private blogService: BlogDataService) { }

  ngOnInit(): void {
    console.log(this.writerId)
    this.blogService.getWriterById(this.writerId)
      .subscribe((resp) => {
        console.log(resp);
        this.writerData = resp;
      });
  }

  // mailto(emailAddress: string) {
  //   return "mailto:" + emailAddress;
  // }

}