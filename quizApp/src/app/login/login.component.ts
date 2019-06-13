import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = "";
  password: String = "";
  error;
  constructor(private userServ: UserServiceService, private router: Router) { }
  login() {
    this.userServ.login({
      "email": this.email,
      "password": this.password
    }).subscribe(res => {
      if (res['error']) {
        return this.error = res['error'];
      } else if(res['logged']) {
        this.router.navigate(['/quiz_guard'])
      }
      this.userServ.userLogin();
console.log(this.email);  
  }) 
}
  ngOnInit() {
  }

}
