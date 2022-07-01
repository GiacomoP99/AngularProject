import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderRepositoryService } from 'src/app/model/order-repository.service';
import { OrderService } from 'src/app/model/order.service';

@Component({
  selector: 'app-reactive-checkout',
  templateUrl: './reactive-checkout.component.html',
  styleUrls: ['./reactive-checkout.component.css'],
})
export class ReactiveCheckoutComponent implements OnInit {
  orderForm: FormGroup;
  orderId: number = 0;
  constructor(
    public order: OrderService,
    private repo: OrderRepositoryService
  ) {
    this.orderForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Za-z ]+$'),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Za-z ]+$'),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  get name() {
    return this.orderForm.get('name');
  }

  get surname() {
    return this.orderForm.get('surname');
  }
  get city() {
    return this.orderForm.get('city');
  }
  get address() {
    return this.orderForm.get('address');
  }
  sent = false;
  ngOnInit(): void {}

  sendOrder() {
    if (this.orderForm.valid) {
      this.repo.saveOrder(this.order).subscribe((data) => {
        this.orderId = data.id;
        this.order.clear();
        this.sent = true;
      });
    }
  }
}
