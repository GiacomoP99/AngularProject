import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { Product } from './product';

@Injectable()
export class RestDatasourceService {
  products: Product[] = [];
  orders: OrderService[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((data) => (this.products = data));
  }

  getProducts(): Product[] {
    return this.products;
  }

  saveOrder(order: OrderService) {
    console.log(JSON.stringify(order));
  }
}
