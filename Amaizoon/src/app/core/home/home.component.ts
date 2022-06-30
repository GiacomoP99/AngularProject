import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/model/cart.service';
import { Product } from 'src/app/model/product';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedCategory: string | undefined = '';

  constructor(
    private productrepo: ProductRepositoryService,
    private cart: CartService
  ) {}

  getProducts(): Product[] {
    return this.productrepo.getProducts(this.selectedCategory);
  }

  getCategories(): (string | undefined)[] {
    return this.productrepo.getCategories();
  }

  addToCart(p: Product) {
    this.cart.add(p);
  }

  ngOnInit(): void {}
}
