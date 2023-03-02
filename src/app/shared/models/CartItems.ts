import Food from './food';

class CartItem {
  food!: Food;
  quantity: number = 1;

  constructor(food: Food) {
    this.food = food;
  }

  get price(): number {
    return this.food.price * this.quantity;
  }
}

export default CartItem;
