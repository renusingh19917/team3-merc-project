import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { Page404Component } from './components/page404/page404.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { WriterDetailsComponent } from './components/writer-details/writer-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    BlogListComponent,
    BlogDetailsComponent,
    Page404Component,
    CommentListComponent,
    FooterComponent,
    ToolbarComponent,
    WriteBlogComponent,
    WriterDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
