import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

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
  deleteProduct(productId: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${productId}`);
  }
  getProductById(id: string) {
    return this.httpClient
      .get<any>(`${this.baseUrl}/${id}`)
      .pipe(map(result => result.data));
  }

  getProductsByCategoryId(categoryId: string) {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/products/${categoryId}`)
      .pipe(map(result => result.data));
  }

  addProduct(product: Product) {
    console.log(product);
    return this.httpClient.post<any>(this.baseUrl, product);
  }

  updateProduct(productId: string, product: Product) {
    return this.httpClient.put<any>(`${this.baseUrl}/${productId}`, product);
  }
  saveProductImage(image: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/saveImage`, image);
  }
}
