import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedCategory: string | undefined = '';

  constructor(private productrepo: ProductRepositoryService) {}

  getProducts(): Product[] {
    return this.productrepo.getProducts(this.selectedCategory);
  }

  getCategories(): (string | undefined)[] {
    return this.productrepo.getCategories();
  }
  ngOnInit(): void {}
}
