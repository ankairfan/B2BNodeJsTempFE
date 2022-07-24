import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  baseUrl: string = `${environment.apiUrl}`;
  isAuthanticated() {
    if(localStorage.getItem('adminToken')) {
      return true;
    }
    return false;
  }


  login(email: string, password: string) {
    return this.httpClient.post(`${this.baseUrl}/${}`, {email, password});
  }
}
