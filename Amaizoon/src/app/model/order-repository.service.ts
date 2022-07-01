import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { RestDatasourceService } from './rest-datasource.service';

@Injectable()
export class OrderRepositoryService {
  constructor(private datasource: RestDatasourceService) {}

  saveOrder(order: OrderService) {
    this.datasource.saveOrder(order);
  }
}
