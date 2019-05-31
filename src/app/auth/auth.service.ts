import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserInterface from '../users/models/user.model';
import UsersService from '../users/users.service';

@Injectable({
    providedIn: 'root'
  })
export default class AuthService {

    constructor(private http: HttpClient,
                private usersService: UsersService) {

    }

    public isLoggedIn(): boolean {
        return !!sessionStorage.getItem('loggedUser');
    }

    public getLoggedUser(): UserInterface {
        return JSON.parse(sessionStorage.getItem('loggedUser'));
    }

    public login(username: string, password: string): Observable<UserInterface> {
        return new Observable((observer) => {
            this.usersService.getAllUsers()
            .subscribe((allUsers) => {
                const user = allUsers
                .find(u => u.username === username && u.password === password);

                if (user) {
                    sessionStorage.setItem('loggedUser', JSON.stringify(user))
                    observer.next(user);
                    observer.complete();
                } else {
                    observer.error("Incorrect username/password!");
                }
            });
        });        
    }
 }