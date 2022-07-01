import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRepositoryService } from 'src/app/model/order-repository.service';
import { OrderService } from 'src/app/model/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    public order: OrderService,
    private repo: OrderRepositoryService
  ) {}
  sent = false;
  ngOnInit(): void {}

  sendOrder(form: NgForm) {
    if (form.valid) {
      this.repo.saveOrder(this.order);
      this.order.clear();
      this.sent = true;
    }
  }
}
