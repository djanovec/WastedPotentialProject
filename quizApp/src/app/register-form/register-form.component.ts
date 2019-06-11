import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email: String = "";
  password: String = "";
  firstName: String = "";
  lastName: String = "";
  error;
  constructor(private userServ: UserServiceService) { }
  signup() {
      this.userServ.signup({
        "email": this.email,
        "password": this.password,
        "firstName": this.firstName,
        "lastName": this.lastName
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
