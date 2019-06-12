import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isSignedUp = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  signup(loginData) {
    return this.http.post('http://localhost:3000/users/create', loginData)
  }

  login(loginData) {
    return this.http.post('http://localhost:3000/users/login', loginData)
  }
  deleteUser(email){
    return this.http.delete('http://localhost:3000/users/delete', email)
  }
  userLogin(){
    this.isLoggedIn.next(true);
  }
  logout(){
    this.isLoggedIn.next(false); 
  }
}
