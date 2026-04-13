import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  openMenu(id: number) {
    this.router.navigate(['/customer/menu', id]);
  }
}