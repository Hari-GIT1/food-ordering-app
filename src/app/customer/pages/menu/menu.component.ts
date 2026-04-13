import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuItem } from '../../models/menu.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: MenuItem[] = [];
  restaurantId!: number;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.menuItems = this.restaurantService.getMenuByRestaurant(this.restaurantId);
  }
  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
    alert('Item added to cart');
  }
  goToCart() {
    this.router.navigate(['/customer/cart']);
  }

}
