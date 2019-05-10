import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import UsersService from '../users.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
            private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(5)]],
      picture: ['https://picsum.photos/200/300', Validators.required]
    });
   }

  ngOnInit() {
  }

  onFormSubmit(event): void {
    console.log(this.userForm);

    this.usersService.addNewUser(this.userForm.value)
    .subscribe(() => {
      console.log('USER CREATED');
      this.router.navigateByUrl('users/list');
    })
  }

  get isFormValid(): boolean {
    return this.userForm.valid;
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  get name() {
    return this.userForm.get('name');
  }

  get picture() {
    return this.userForm.get('picture');
  }

}
