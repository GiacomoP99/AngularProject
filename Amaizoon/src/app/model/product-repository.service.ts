import { Injectable } from '@angular/core';
import { Product } from './product';
import { RestDatasourceService } from './rest-datasource.service';

@Injectable()
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];
  constructor(private datasource: RestDatasourceService) {
    datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c) => c != undefined)
        .filter((v, i, a) => a.indexOf(v) === i);
    });
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
