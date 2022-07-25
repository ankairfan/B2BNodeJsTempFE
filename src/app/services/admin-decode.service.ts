import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminRole } from '../admin/login/models/admin-role';

@Injectable({
  providedIn: 'root'
})
export class AdminDecodeService {

  jwtHelper : JwtHelperService= new JwtHelperService();
  roles: AdminRole[] = [];

  constructor() { }

  getUserId(): string {

    let decode = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    var userId = Object.keys(decode).filter(p => p.endsWith("_id"))[0];
    return decode[userId];

  }
  getUserName(): string {
    let decode = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    var userName = Object.keys(decode).filter(p => p.endsWith("nameSurname"))[0];
    return decode[userName];
  }
  getUserRole() {
    this.roles = [];
    let decode = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    var userRole = Object.keys(decode).filter(p => p.endsWith("role"));
    userRole.forEach(element => {
      let model = new AdminRole();
      model.role = decode[element];
      this.roles.push(model);
    })
    return this.roles;
  }
}
