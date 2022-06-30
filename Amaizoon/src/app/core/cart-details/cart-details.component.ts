import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { CartService } from 'src/app/model/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  constructor(private cart: CartService) {}

  get products(): CartProduct[] {
    return this.cart.products;
  }

  get totalPrice(): number {
    return this.cart.totalPrice;
  }

  get totalProducts(): number {
    return this.cart.totalProducts;
  }

  removeOne(id: number) {
    this.cart.removeOne(id);
  }
  ngOnInit(): void {}
}
