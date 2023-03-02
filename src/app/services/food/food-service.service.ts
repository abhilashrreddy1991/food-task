import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Sushi',
        price: 20,
        cookTime: '20-30',
        origins: ['japanese'],
        imageUrl: '/assets/food-1.jpg',
      },
      {
        id: 2,
        name: `Burger N' Fries`,
        price: 15,
        cookTime: '25-30',
        origins: ['american'],
        imageUrl: '/assets/food-2.jpg',
      },
      {
        id: 3,
        name: 'Dim sum',
        price: 10,
        cookTime: '20-25',
        origins: ['chinese'],
        imageUrl: '/assets/food-3.jpg',
      },
      {
        id: 4,
        name: 'Brätwurst',
        price: 15,
        cookTime: '20-30',
        origins: ['german'],
        imageUrl: '/assets/food-4.jpg',
      },
      {
        id: 5,
        name: 'Spicy Saucy Pizza',
        price: 10,
        cookTime: '15-20',
        origins: ['italian'],
        imageUrl: '/assets/food-5.jpg',
      },
      {
        id: 6,
        name: 'Eggs Benedict',
        price: 20,
        cookTime: '15-20',
        origins: ['english'],
        imageUrl: '/assets/food-6.jpg',
      },
      {
        id: 7,
        name: 'Spaghetti',
        price: 20,
        cookTime: '20-30',
        origins: ['italian'],
        imageUrl: '/assets/food-7.jpg',
      },
      {
        id: 8,
        name: 'Tacos',
        price: 15,
        cookTime: '20-25',
        origins: ['mexican'],
        imageUrl: '/assets/food-8.jpg',
      },
    ];
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id === +id)!;
  }
}
