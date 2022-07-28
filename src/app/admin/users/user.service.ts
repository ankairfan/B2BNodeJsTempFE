import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/admin/users/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  }

  baseUrl: string = `${environment.apiUrl}`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.baseUrl}/users`, this.httpOptions);
  }

  getUser(id: number): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}/user/${id}`, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this._http.post<User>(`${this.baseUrl}/user`, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this._http.put<User>(`${this.baseUrl}/user/${user._id}`, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this._http.delete<User>(`${this.baseUrl}/users/${id}`, this.httpOptions);
  }

  getUserByEmail(email: string): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}/users/email/${email}`, this.httpOptions);
  }


}


