import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: MenuItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
  remove(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
}
