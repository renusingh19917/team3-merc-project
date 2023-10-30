import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private blogService: BlogDataService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin = () => {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.blogService.login(loginData)
        .subscribe((resp) => {
          console.log(resp);
          // if (resp.username === loginData.username && resp.password === loginData.password) {
          // code for jsonplaceholder typicode service 
          if (resp.length > 0 && resp[0].username === loginData.username && resp[0].username === loginData.password) {
            alert(`Hi ${resp[0].username}! You've successfully logged in.`);
            this.loginForm.reset();
            localStorage.setItem('loggedInUser', resp[0].username);
            this.router.navigate(['/home']);
          }
          else {
            alert('Invalid credentials!');
            this.loginForm.reset();
          }
        });
    }
  };
}
