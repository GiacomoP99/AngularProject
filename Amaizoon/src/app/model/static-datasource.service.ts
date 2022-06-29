import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class StaticDatasourceService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iphone 12',
      category: 'Smartphone',
      price: 949.99,
      description: 'apple device',
    },
    {
      id: 2,
      name: 'xiaomi',
      category: 'Smartphone',
      price: 549.99,
      description: 'average performance smartphone',
    },
    {
      id: 3,
      name: 'Samsung s12',
      category: 'Smartphone',
      price: 749.99,
      description: 'shitty smartphone for apple haters',
    },
    {
      id: 4,
      name: 'Dishwasher',
      category: 'Home appliance',
      price: 249.99,
      description: 'excelent dishwasher',
    },
    {
      id: 5,
      name: 'Washing-machine',
      category: 'Home appliance',
      price: 279.99,
      description: 'good enough washing machine',
    },
    {
      id: 6,
      name: 'dell i7',
      category: 'Laptop',
      price: 1249.99,
      description: 'good laptop',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  constructor() {}
}
