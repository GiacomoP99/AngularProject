import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() bought = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  itembought() {
    this.bought.emit(this.product);
  }
}
