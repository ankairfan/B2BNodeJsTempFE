import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = `${environment.apiUrl}product`;
  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient
      .get<any>(this.baseUrl)
      .pipe(map(result => result.data));
  }
}
