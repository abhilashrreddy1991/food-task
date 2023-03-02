import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, Food, CartItem } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartCount = new BehaviorSubject<number>(0);

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(
      (item: any) => item.food.id === food.id
    );
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.cartCount.next(this.cart.items.length);
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(
      (item: any) => item.food.id !== foodId
    );
    this.cartCount.next(this.cart.items.length);
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item: any) => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  getCart(): Cart {
    return this.cart;
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }
}
