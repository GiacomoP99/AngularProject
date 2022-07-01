import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  constructor(public cart: CartService) {}
  id: number = 0;
  name: string = '';
  surname: string = '';
  city: string = '';
  address: string = '';

  clear() {
    this.id = 0;
    this.name = '';
    this.surname = '';
    this.city = '';
    this.address = '';
    this.cart.empty();
  }
}
