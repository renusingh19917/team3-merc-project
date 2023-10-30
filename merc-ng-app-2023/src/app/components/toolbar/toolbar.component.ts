import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) { }

  randomBlogId: number = Math.floor(Math.random() * 100);

  isLoggedInNow(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  logoutNow(): void {
    alert('Logging out...');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/home']);
  }

}