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
    return this.http.post('/users/create', loginData)
  }

  login(loginData) {
    return this.http.post('/users/login', loginData)
  }
  deleteUser(email){
    return this.http.delete('/users/delete', email)
  }
  userLogin(){
    this.isLoggedIn.next(true);
  }
  logout(){
    this.isLoggedIn.next(false); 
  }
}
