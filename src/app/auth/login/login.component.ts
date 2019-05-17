import { Component, OnInit } from '@angular/core';
import AuthService from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
                
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  }); 
               }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService
    .login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe((user) => {
      console.log('LOGIN SUCCESS');
      console.log(user);
      this.router.navigateByUrl('users/list');
    }, (error) => {
      console.error(error);
    });
  }

}
