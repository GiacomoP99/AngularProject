import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category';
import { Product } from 'src/app/product';
import { RestDatasourcesService } from 'src/app/rest-datasources.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() products = new EventEmitter<Product[]>();
  categories: Category[] = [];
  IdC: number = 0;
  constructor(private repo: RestDatasourcesService) {
    this.repo.getCategories().subscribe((data) => (this.categories = data));
  }

  ngOnInit(): void {}

  send(form: NgForm) {
    let prods: Product[] = [];
    this.repo.getProducts(this.IdC).subscribe((data) => {
      prods = data;
      this.products.emit(prods);
    });
  }
}
