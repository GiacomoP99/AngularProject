import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { ProductRepositoryService } from './product-repository.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [],
  providers: [StaticDatasourceService, ProductRepositoryService, CartService],
  imports: [CommonModule],
})
export class ModelModule {}
