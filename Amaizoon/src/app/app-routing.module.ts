import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './administration/main/main.component';
import { CartDetailsComponent } from './core/cart-details/cart-details.component';
import { HomeComponent } from './core/home/home.component';
import { ReactiveCheckoutComponent } from './core/reactive-checkout/reactive-checkout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'checkout', component: ReactiveCheckoutComponent },
  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
