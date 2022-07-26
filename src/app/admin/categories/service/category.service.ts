import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = `${environment.apiUrl}category`;

  getCategories() {
    return this.httpClient
      .get<any>(this.baseUrl)
      .pipe(map(result => result.data));
  }

  getCategoryById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`)
      .pipe(map(result => result.data));
  }

  removeCategory(categoryId: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${categoryId}`);
  }

  addCategory(category: Category) {

    return this.httpClient.post<any>(this.baseUrl, category);

  }


  updateCategory(categoryId: string, category: Category) {
    return this.httpClient.put<any>(`${this.baseUrl}/${categoryId}`, category);
  }



}
