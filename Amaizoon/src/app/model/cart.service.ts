import { Injectable } from '@angular/core';
import { CartProduct } from './cart-product';
import { Product } from './product';

@Injectable()
export class CartService {
  private cart: CartProduct[] = [];
  totalProducts: number = 0;
  totalPrice: number = 0;
  constructor() {}

  empty() {
    this.cart = [];
    this.ricalcola();
  }

  setValues(cartData: CartService) {
    this.cart = this.getProducts(cartData);
  }

  add(p: Product) {
    let item = this.cart.find((prod) => prod.product.id == p.id);
    if (item == undefined) {
      item = new CartProduct(p, 1);
      this.cart.push(item);
    } else {
      item.quantity += 1;
    }
    this.ricalcola();
  }

  remove(id: number) {
    let item = this.cart.find((prod) => prod.product.id == id);
    if (item) {
      this.cart.splice(this.cart.indexOf(item), 1);
    }
    this.ricalcola();
  }

  get products(): CartProduct[] {
    return this.cart;
  }

  getProducts(cart: CartService): CartProduct[] {
    return cart.cart;
  }

  ricalcola() {
    this.totalPrice = 0;
    this.totalPrice = this.cart.reduce(
      (res, item) => res + item.quantity * item.product.price,
      0
    );
    this.totalProducts = 0;
    this.totalProducts = this.cart.reduce(
      (res, item) => res + item.quantity,
      0
    );
  }

  updateQuantity(id: number, quantity: number) {
    let item = this.cart.find((prod) => prod.product.id == id);
    if (item) {
      if (quantity <= 0) {
        this.remove(id);
      }
      item.quantity = quantity;
    }
    this.ricalcola();
  }
}
