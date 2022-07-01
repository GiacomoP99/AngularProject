import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  constructor(public cart: CartService) {}
  name: string = '';
  surname: string = '';
  city: string = '';
  address: string = '';

  clear() {
    this.name = '';
    this.surname = '';
    this.city = '';
    this.address = '';
    this.cart.empty();
  }
}
