import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';

const childRoot: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'order-management', component: OrderManagementComponent },
      {
        path: 'product-management',
        component: ProductManagementComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    ProductManagementComponent,
    OrderManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoot),
    FormsModule,
    ModelModule,
    ReactiveFormsModule,
  ],
})
export class AdministrationModule {}
