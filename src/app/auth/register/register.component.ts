import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UsersService from '../../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(5)]],
      picture: ['https://picsum.photos/200/300', Validators.required]
    });
  }

  onRegister(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      const username = this.registerForm.value.username.toLowerCase();
      if (users.find(u => u.username.toLowerCase() === username)) {
        return;
      }

      this.usersService.addNewUser(this.registerForm.value)
        .subscribe(() => {
          this.router.navigateByUrl('auth/login');
        });

    });
  }

}
