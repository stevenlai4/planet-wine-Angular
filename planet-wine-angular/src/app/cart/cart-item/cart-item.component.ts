import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;

  totalPrice: number;

  constructor() {}

  ngOnInit(): void {
    this.totalPrice = this.calcTotalPrice(
      this.cartItem.price,
      this.cartItem.qty
    );
  }

  // Change total price when user insert into inputs
  insertInput(input: any): number {
    // Validate Input
    if (input.target.value === '') {
      window.alert('Please enter your quantity!');
      input.target.value = 0;
    } else if (isNaN(parseInt(input.target.value))) {
      window.alert('Please enter an integer number for the quantity!');
      input.target.value = localStorage.getItem(this.cartItem.id);
    } else if (input.target.value < 0 || input.target.value > 100) {
      window.alert('Please enter a quantity number between 0 to 100!');
      input.target.value = localStorage.getItem(this.cartItem.id);
    } else if (!Number.isInteger(Number(input.target.value))) {
      window.alert('Please enter an integer number for the quantity!');
      input.target.value = Math.floor(input.target.value);
    }

    // Eliminating leading zero when there's one
    input.target.value = Number(input.target.value);

    if (input.target.value == 0) {
      localStorage.removeItem(this.cartItem.id);
    } else {
      localStorage.setItem(this.cartItem.id, input.target.value);
    }

    this.totalPrice = this.calcTotalPrice(
      this.cartItem.price,
      input.target.value
    );

    return this.totalPrice;
  }

  // Claculate total price of wine
  calcTotalPrice(price: number, quantity: string): number {
    return price * parseInt(quantity);
  }

  // Increase wine quantity when plus button clicked
  increaseQty(input: any): number {
    if (input.value < 100) {
      input.value = parseInt(input.value) + 1;
      localStorage.setItem(this.cartItem.id, input.value);
      this.totalPrice = this.calcTotalPrice(this.cartItem.price, input.value);
    }

    return this.totalPrice;
  }

  // Decrease wine quantity when minus button clicked
  decreaseQty(input: any): number {
    if (input.value > 0) {
      input.value = parseInt(input.value) - 1;

      if (input.value == 0) {
        localStorage.removeItem(this.cartItem.id);
      } else {
        localStorage.setItem(this.cartItem.id, input.value);
      }
      this.totalPrice = this.calcTotalPrice(this.cartItem.price, input.value);
    }

    return this.totalPrice;
  }
}
