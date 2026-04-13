import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  createOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }
}