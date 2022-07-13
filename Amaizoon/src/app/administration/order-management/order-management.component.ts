import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { CartService } from 'src/app/model/cart.service';
import { OrderRepositoryService } from 'src/app/model/order-repository.service';
import { OrderService } from 'src/app/model/order.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent implements OnInit {
  orders: OrderService[] = [];
  constructor(private repo: OrderRepositoryService) {
    this.repo.getOrders().subscribe((data) => (this.orders = data));
  }
  setCart(cartData: CartService): CartService {
    let cart = new CartService();
    cart.setValues(cartData);
    return cart;
  }
  getOrders() {
    return this.orders;
  }

  show(carrello: HTMLSpanElement) {
    if (carrello.style.display == '') {
      carrello.style.display = 'none';
    } else {
      carrello.style.display = '';
    }
  }

  removeOrder(id: number) {
    this.repo.removeOrder(id).subscribe(() => {
      this.orders.splice(
        this.orders.indexOf(this.orders.find((order) => order.id == id)!),
        1
      );
    });
  }

  ngOnInit(): void {}
}
