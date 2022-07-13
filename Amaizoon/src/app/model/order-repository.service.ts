import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';
import { RestDatasourceService } from './rest-datasource.service';

@Injectable()
export class OrderRepositoryService {
  constructor(private datasource: RestDatasourceService) {}

  saveOrder(order: OrderService): Observable<OrderService> {
    return this.datasource.saveOrder(order);
  }

  getOrders(): Observable<OrderService[]> {
    return this.datasource.getOrders();
  }

  removeOrder(id: number): Observable<Object> {
    return this.datasource.removeOrder(id);
  }
}
