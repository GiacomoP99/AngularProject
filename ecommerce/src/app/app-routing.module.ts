import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './core/form/form.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { ProductListComponent } from './core/product-list/product-list.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'contacts',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: HomeComponent,
  },
  {
    path: 'modify/:id',
    component: FormComponent,
  },
  { path: 'selectC/:id', component: MainComponent },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
