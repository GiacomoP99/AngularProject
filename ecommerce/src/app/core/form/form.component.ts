import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category';
import { Product } from 'src/app/product';
import { RestDatasourcesService } from 'src/app/rest-datasources.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  prod: Product = new Product();
  modify = false;
  prodForm: FormGroup;
  categories: Category[] = [];
  error_msg = '';
  too_long = '';

  constructor(
    private repo: RestDatasourcesService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.repo.getCategories().subscribe((data) => (this.categories = data));
    this.prodForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(40),
      ]),
      price: new FormControl('', [Validators.required]),
    });
    let id = this._Activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.repo.findById(+id).subscribe((data) => {
        this.prod = data;
        this.category?.setValue(this.prod.category!);
        this.name?.setValue(this.prod.name!);
        this.description?.setValue(this.prod.description!);
        this.price?.setValue(this.prod.price!);
      });
      this.modify = true;
    } else {
      this.prod = new Product();
      this.modify = false;
    }
  }

  updateProduct() {
    return this.repo.updateProduct(this.prod, this.prod.id!);
  }

  addProduct() {
    return this.repo.addProduct(this.prod);
  }

  get name() {
    return this.prodForm!.get('name');
  }

  get description() {
    return this.prodForm!.get('description');
  }
  get price() {
    return this.prodForm!.get('price');
  }
  get category() {
    return this.prodForm!.get('category');
  }

  setValues() {
    this.prod.name = this.name?.value;
    this.prod.description = this.description?.value;
    this.prod.price = this.price?.value;
    this.prod.category = this.category?.value;
    this.prod.image = 'assets/fonfon.jpg';
  }

  sendForm() {
    if (this.prodForm!.valid) {
      this.setValues();
      if (this.modify) {
        this.updateProduct().subscribe(() =>
          this.router.navigateByUrl('/products')
        );
      } else {
        this.addProduct().subscribe(() =>
          this.router.navigateByUrl('/products')
        );
      }
    } else {
      this.too_long = '';
      this.error_msg = 'missing field : ';
      if (!this.name?.value) this.error_msg += 'name, ';
      if (!this.description?.value) this.error_msg += 'description, ';
      if (!this.price?.value) this.error_msg += 'price, ';
      if (this.name?.errors?.['maxlength'])
        this.too_long += 'field name too long';
      if (this.description?.errors?.['maxlength'])
        this.too_long += 'field description too long';
    }
  }

  ngOnInit(): void {}
}
