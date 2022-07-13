import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { RestDatasourcesService } from 'src/app/rest-datasources.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private repo: RestDatasourcesService) {
    this.repo.getProducts(0).subscribe((data) => (this.products = data));
  }

  ngOnInit(): void {}
  getProducts(): Product[] {
    return this.products;
  }

  removeProduct(id: number) {
    this.repo.removeProduct(id);
    this.products.splice(
      this.products.indexOf(this.products.find((item) => item.id == id)!),
      1
    );
  }

  modify(prod: Product) {}
}
