import { Component, OnInit } from '@angular/core';
import UserInterface from '../models/user.model';
import UsersService from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserInterface[] = [];

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }

  onItemDeleted(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.usersService.deleteUser(id).subscribe(() => {
        console.log('USER DELETED');
      });
    }

    
  }

  onAddUser(): void {
    this.router.navigateByUrl('/users/add');
  }
}
