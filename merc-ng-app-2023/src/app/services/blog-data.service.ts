import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, Observable, retry, take, throwError } from 'rxjs';
import { Blog } from '../models/blog.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  // private expoBackOff = (retry: number, delayInMs: number) => {
  //   return (errors: Observable<any>) => {
  //     return errors.pipe(
  //       delay(delayInMs),
  //       take(retry)
  //       // ,
  //       // catchError((err) => { throwError(err) })
  //     );
  //   };
  // };

  // function retryWhen(arg0: (errors: Observable<any>) => Observable<any>): import("rxjs").OperatorFunction<Blog, Blog> {
  //   throw new Error('Function not implemented.');
  // }

  getAllBlogs = (): Observable<Blog[]> => {
    return this.http.get<any[]>(this.blogUrl);
  };

  getBlogById = (blogId: number): Observable<Blog> => {
    return this.http.get<Blog>(`${this.blogUrl}/${blogId}`);
    // return this.http.get<Blog>(`${this.blogUrl}/${blogId}`)
    //   .pipe(
    //     retryWhen(this.expoBackOff(3, 2000)),
    //     catchError((err) => {
    //       return throwError(err)
    //     })
    //   )
  };

  commentURL: string = 'https://jsonplaceholder.typicode.com/comments';

  getCommentByBlogId = (postId: number): Observable<Comment[]> => {
    return this.http.get<Comment[]>(`${this.commentURL}?postId=${postId}`);
  };

  addNewBlog = (newBlog: Blog): Observable<any> => {
    console.log(newBlog);
    return this.http.post<Blog>(this.blogUrl, newBlog);
  };

  writerUrl: string = 'https://jsonplaceholder.typicode.com/users';

  getWriterById = (writerId: number): Observable<any> => {
    console.log(writerId);
    return this.http.get<any>(`${this.writerUrl}/${writerId}`);
  };

  register = (registerData: any): Observable<any> => {
    console.log(registerData);
    return this.http.post(this.writerUrl, registerData);
  };

  login = (loginData: any): Observable<any> => {
    console.log(loginData);
    return this.http.get(`${this.writerUrl}?username=${loginData.username}`);
  };

  private locationUrl = 'https://api.postalpincode.in/pincode/';

  getLocationDetails(pincode: string): Observable<any> {
    const url = `${this.locationUrl}${pincode}`;
    return this.http.get(url);
  };

}
