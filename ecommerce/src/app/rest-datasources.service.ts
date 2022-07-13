import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './product';

@Injectable()
export class RestDatasourcesService {
  baseUrl: string = 'http://localhost:8081/Ecommerce/api/v1';
  constructor(private http: HttpClient) {}

  getProducts(idC: number): Observable<Product[]> {
    if (idC == 0 || idC == undefined) {
      return this.http.get<Product[]>(`${this.baseUrl}/public/products`);
    } else {
      return this.http.get<Product[]>(
        `${this.baseUrl}/public/products/category/${idC}`
      );
    }
  }

  removeProduct(id: number) {
    this.http.delete(`${this.baseUrl}/private/products/${id}`).subscribe();
  }

  findById(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/public/products/${id}`);
  }

  addProduct(prod: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}/private/products`, prod);
  }

  updateProduct(prod: Product, id: number): Observable<Product> {
    return this.http.put(`${this.baseUrl}/private/products/${id}`, prod);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/public/categories`);
  }
}
