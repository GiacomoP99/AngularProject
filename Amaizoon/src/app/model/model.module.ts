import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { ProductRepositoryService } from './product-repository.service';
import { CartService } from './cart.service';
import { OrderService } from './order.service';
import { OrderRepositoryService } from './order-repository.service';
import { RestDatasourceService } from './rest-datasource.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    StaticDatasourceService,
    ProductRepositoryService,
    CartService,
    OrderService,
    OrderRepositoryService,
    RestDatasourceService,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class ModelModule {}
