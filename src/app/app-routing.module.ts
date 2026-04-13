import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RestaurantsComponent } from './customer/pages/restaurants/restaurants.component';
import { MenuComponent } from './customer/pages/menu/menu.component';
import { CartComponent } from './customer/pages/cart/cart.component';
import { CheckoutComponent } from './customer/pages/checkout/checkout.component';
import { OrdersComponent } from './customer/pages/orders/orders.component';

const routes = [
  { path: '', component: LoginComponent },
  {
    path: 'customer/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'customer/menu/:id',
    component: MenuComponent
  },
  {
    path: 'customer/cart',
    component: CartComponent
  },
  {
    path: 'customer/checkout',
    component: CheckoutComponent
  },
  {
    path: 'customer/orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
