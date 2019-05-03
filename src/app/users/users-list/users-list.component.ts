import { Component, OnInit } from '@angular/core';
import UserInterface from '../models/user.model';
import UsersService from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserInterface[] = [];

  constructor(private usersService: UsersService) { 
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }
}
