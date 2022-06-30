import { Product } from './product';

export class CartProduct {
  constructor(public product: Product, public quantity: number = 0) {}

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}
