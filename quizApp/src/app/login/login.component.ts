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
        this.error = res['error'];
        return
      } else {
        console.log(res)
        this.router.navigate(['/take_quiz'])
      }
      this.userServ.userLogin();
    })
}
  ngOnInit() {
  }

}
