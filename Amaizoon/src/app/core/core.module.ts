import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    CartSectionComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  imports: [CommonModule, ModelModule, RouterModule],
  exports: [HomeComponent],
})
export class CoreModule {}
