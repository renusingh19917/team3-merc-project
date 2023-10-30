import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { Page404Component } from './components/page404/page404.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-blogs', component: BlogListComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'write-blog', component: WriteBlogComponent }, 
  { path: 'write-blog', component: WriteBlogComponent, canActivate: [localStorage.getItem('loggedInUser')] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
