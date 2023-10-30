
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent {
  blogForm: FormGroup | any = '';

  // fetch from backend 
  topicsList: string[] = ['Art', 'Food', 'Philosophy', 'Technology', 'Travel', 'Science'];
  selectedTopics: string[] = ['Art', 'Food', 'Philosophy', 'Technology', 'Travel', 'Science'];

  topicSuggestion = (query: string) => {
    console.log(query);
    return this.topicsList.filter(
      (topic) => { return topic.toLowerCase().includes(query.toLowerCase()) }
    )
  };

  topicInputChange = () => {
    console.log(this.selectedTopics);
    console.log(this.blogForm.get('topics').value);
    this.selectedTopics = this.topicSuggestion(this.blogForm.get('topics').value); // this 
  };

  selectTopic = (topic: string) => {
    console.log(topic);
    this.blogForm.get('topics').setValue(topic);
    // this.selectedTopics = [];
  };

  constructor(private formBuilder: FormBuilder, private blogService: BlogDataService) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      topics: [[], Validators.required]
    });
  }

  submitBlog = () => {
    console.log(this.blogForm.value);
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      this.blogService.addNewBlog(blogData)
        .subscribe((resp) => { alert(resp); this.blogForm.reset(); });
    }
  };

};
