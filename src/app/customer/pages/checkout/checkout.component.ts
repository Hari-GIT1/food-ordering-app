import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: any[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  placeOrder() {

    const order: Order = {
      id: Date.now(),
      items: this.items,
      total: this.total,
      status: 'placed'
    };

    this.orderService.createOrder(order);

    this.cartService.clearCart();

    alert('Order placed successfully!');

    this.router.navigate(['/customer/orders']);
  }
}
