import { AuthService } from './guard/auth.service';
import { Component, OnInit } from '@angular/core';
import { Login } from './models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminLoginModel: Login = new Login();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm:any) {
    this.adminLoginModel=loginForm;
    this.authService.login(this.adminLoginModel);
  }
}
