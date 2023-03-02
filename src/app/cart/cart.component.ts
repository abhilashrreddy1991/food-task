import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart/cart-service.service';

import { CartItem, Cart } from '../shared/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;
  totalAfterTax!: number;
  tax!: number;
  userForm!: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.setCart();
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      address: [''],
      card_user_name: [''],
      card_number: [''],
      card_expiry_month: [''],
      card_expiry_year: [''],
      card_cvv: [''],
    });
  }

  setCart() {
    this.cart = this.cartService.getCart();
    this.tax = this.cart.totalPrice * 0.09;
    this.totalAfterTax = this.cart.totalPrice + this.tax;
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: string) {
    this.cartService.changeQuantity(cartItem.food.id, +quantity);
    this.setCart();
  }
  checkout() {
    console.log(JSON.stringify(this.cart.items));
  }
  onSubmit(form: any) {
    var card_details = {
      name: form.card_user_name,
      number: form.card_number,
      card_expiry: form.card_expiry_month + '/' + form.card_expiry_year,
      cvv: form.card_cvv,
    };
    var address = { name: form.name, address: form.address };
    var payment_details = {
      sub_total: this.cart.totalPrice,
      tax: this.tax,
      total_bill: this.totalAfterTax,
    };
    var cart_item_details = this.cart.items;
    var final_submit_details = [
      {
        card_details: card_details,
        address: address,
        payment_details: payment_details,
        cart_item_details: cart_item_details,
      },
    ];

    console.log('submitted', final_submit_details);
  }
}
