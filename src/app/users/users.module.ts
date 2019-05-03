import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent, UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UsersModule { }
