import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserInterface from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export default class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserInterface> {
    return this.http.get<UserInterface>("http://localhost:3000/users");
  }
}
