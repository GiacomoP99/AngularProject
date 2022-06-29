import { Injectable } from '@angular/core';
import { Product } from './product';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];
  constructor(private datasource: StaticDatasourceService) {
    this.products = datasource.getProducts();
    this.categories = datasource
      .getProducts()
      .map((p) => p.category)
      .filter((c) => c != undefined)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  getProducts(selectedCategory: string | undefined): Product[] {
    if (selectedCategory != '') {
      return this.products.filter((p) => p.category == selectedCategory);
    } else {
      return this.products;
    }
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }
}
