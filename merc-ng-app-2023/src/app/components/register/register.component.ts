
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private blogService: BlogDataService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      street: ['', Validators.required],
      city: [{ value: '', disabled: true }],
      state: [{ value: '', disabled: true }],
      pincode: ['', Validators.required],
    });
  }

  submitRegister = () => {
    console.log('submit');
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.blogService.register(registerData)
        .subscribe((resp) => {
          alert(`Hi ${resp.username}! You've successfully registered.`);
          this.registerForm.reset();
        });
    }
  };

  onPincodeChange(): void {
    const pincode = this.registerForm.get('pincode').value;
    this.blogService.getLocationDetails(pincode)
      .subscribe((data: any) => {
        if (data[0]?.PostOffice) {
          const postOffice = data[0].PostOffice[0];
          this.registerForm.patchValue({
            city: postOffice.District,
            state: postOffice.State
          });
        } else {
          this.registerForm.patchValue({
            city: '',
            state: '',
            street: ''
          });
        }
      },
        error => {
          console.error(error);
          this.registerForm.patchValue({
            city: '',
            state: '',
            street: ''
          });
        }
      );
  }
}
