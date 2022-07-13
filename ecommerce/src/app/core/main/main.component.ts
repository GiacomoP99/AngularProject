import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { RestDatasourcesService } from 'src/app/rest-datasources.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
// export class MainComponent implements OnInit {
//   @Input() products!: Product[];

//   constructor(private repo: RestDatasourcesService) {
//     this.repo.getProducts(0).subscribe((data) => (this.products = data));
//   }

//   ngOnInit(): void {}

//   getProducts(): Product[] {
//     return this.products;
//   }

//   buy(prod: Product) {
//     alert('item added to cart , name: ' + prod.name);
//   }
// }
export class MainComponent implements OnInit {
  @Input() products!: Product[];

  constructor(private repo: RestDatasourcesService) {}

  ngOnInit(): void {}

  getProducts(): Observable<Product[]> {
    return this.repo.getProducts(0);
  }

  buy(prod: Product) {
    alert('item added to cart , name: ' + prod.name);
  }
}
