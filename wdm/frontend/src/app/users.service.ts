import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="http://localhost:4000";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url + '/users');
  }

  getUserByName(name) {
    return this.http.get(this.url + '/user/' + name);
  }

  addUser(name, email, password) {
    const user = {
      name: name,
      email: email,
      password: password
    };
    console.log(user);
    return this.http.post(this.url + '/users/add', user);
  }

}
