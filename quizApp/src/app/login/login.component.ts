import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = "";
  password: String = "";
  error;
  constructor(private userServ: UserServiceService) { }
  signup() {
    this.userServ.signup({
      "email": this.email,
      "password": this.password
    }).subscribe(res => {
      if (res['error']) {
        this.error = res['error'];
        return
      }
      this.userServ.userLogin();
    })
}
  ngOnInit() {
  }

}
