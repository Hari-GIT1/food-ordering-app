import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';



@NgModule({
  declarations: [
    RestaurantsComponent,
    MenuComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomerModule { }
