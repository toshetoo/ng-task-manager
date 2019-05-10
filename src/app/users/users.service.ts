import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserInterface from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export default class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3000/users');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  addNewUser(user: UserInterface): Observable<any> {
    return this.http.post('http://localhost:3000/users', user)
  }
}
