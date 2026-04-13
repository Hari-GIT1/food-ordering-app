import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: MenuItem[] = [];

  addToCart(item: MenuItem) {
    this.items.push(item);
  }

  getItems(): MenuItem[] {
    return this.items;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}