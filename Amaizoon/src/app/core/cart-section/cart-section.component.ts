import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/model/cart.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css'],
})
export class CartSectionComponent implements OnInit {
  constructor(private cart: CartService) {}

  get totalPrice(): number | undefined {
    return this.cart.totalPrice;
  }

  get totalProducts(): number {
    return this.cart.totalProducts;
  }

  emptyCart() {
    this.cart.empty();
  }

  ngOnInit(): void {}
}
