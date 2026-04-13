import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  getRestaurants(): Restaurant[] {
    return [
      {
        id: 1,
        name: 'Dominos',
        cuisine: 'Pizza',
        rating: 4.2,
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'KFC',
        cuisine: 'Fast Food',
        rating: 4.0,
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'A2B',
        cuisine: 'South Indian',
        rating: 4.5,
        image: 'https://via.placeholder.com/150'
      }
    ];
  }
  getMenuByRestaurant(id: number) {

    const menus: any = {
      1: [
        { id: 1, name: 'Veg Pizza', price: 200 },
        { id: 2, name: 'Cheese Burst Pizza', price: 300 }
      ],
      2: [
        { id: 3, name: 'Chicken Bucket', price: 400 },
        { id: 4, name: 'Zinger Burger', price: 150 }
      ],
      3: [
        { id: 5, name: 'Idli', price: 50 },
        { id: 6, name: 'Dosa', price: 80 }
      ]
    };
  
    return menus[id] || [];
  }
}