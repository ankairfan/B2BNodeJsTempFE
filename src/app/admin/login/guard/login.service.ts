import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = `${environment.apiUrl}`;

  signIn(user:any): Observable<any> {
    return this._http.post(`${this.baseUrl}/login`, user)
  }

}
