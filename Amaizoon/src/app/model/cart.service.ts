import { Injectable } from '@angular/core';
import { CartProduct } from './cart-product';
import { Product } from './product';

@Injectable()
export class CartService {
  private cart: CartProduct[] = [];
  constructor() {}

  empty() {
    this.cart = [];
  }

  add(p: Product) {
    let item = this.cart.find((prod) => prod.product.id == p.id);
    if (item == undefined) {
      item = new CartProduct(p, 1);
      this.cart.push(item);
    } else {
      item.quantity += 1;
    }
  }

  removeOne(id: number) {
    let item = this.cart.find((prod) => prod.product.id == id);
    if (item != undefined) {
      if (item.quantity == 1) {
        this.cart.splice(this.cart.indexOf(item), 1);
      } else {
        item.quantity -= 1;
      }
    }
  }

  get products(): CartProduct[] {
    return this.cart;
  }

  get totalPrice(): number {
    return this.cart.reduce(
      (res, item) => res + item.quantity * item.product.price,
      0
    );
  }

  get totalProducts(): number {
    return this.cart.reduce((res, item) => res + item.quantity, 0);
  }
}
