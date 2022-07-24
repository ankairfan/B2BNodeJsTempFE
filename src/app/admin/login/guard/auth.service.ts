import { ToastrService } from 'ngx-toastr';
import { Token } from './../models/token';
import { Login } from './../models/login';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from 'src/app/services/error.service';
import { map } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private errorService: ErrorService) { }


  adminTokenModel: Token = new Token();
  baseUrl: string = `${environment.apiUrl}`;

  isAuthanticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }


  login(adminLoginModel: Login) {
    let api = this.baseUrl + "login";
    this.httpClient.post(api, adminLoginModel).subscribe((res:any) => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/admin"]);
        this.toastr.success("Login Girişi Başarılı");

      } else {
        this.toastr.error("Kullanıcı Adı veya Şifre Hatalı");
      }

    });
  }


}
















