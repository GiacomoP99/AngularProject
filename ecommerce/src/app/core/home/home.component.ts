import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  products: Product[] = [];

  ngOnInit(): void {}

  filterByCat(products: Product[]) {
    this.products = products;
  }
}
