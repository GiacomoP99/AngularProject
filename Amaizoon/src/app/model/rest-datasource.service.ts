import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';
import { Product } from './product';

@Injectable()
export class RestDatasourceService {
  orders: OrderService[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  saveOrder(order: OrderService): Observable<OrderService> {
    return this.http.post<OrderService>('http://localhost:3000/orders', order);
  }

  getOrders(): Observable<OrderService[]> {
    return this.http.get<OrderService[]>('http://localhost:3000/orders');
  }

  removeOrder(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/orders/' + id);
  }
}
