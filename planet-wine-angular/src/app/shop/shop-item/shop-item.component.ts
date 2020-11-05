import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  @Input() shopItem: Shop;

  constructor() {}

  ngOnInit(): void {}

  // Fill in value that have already been saved
  fillInput(): string {
    if (localStorage.getItem(this.shopItem.id.toString())) {
      return localStorage.getItem(this.shopItem.id.toString());
    }

    return '0';
  }

  // Click Event Listener for add button
  addQuantityEvent(input: any) {
    // Eliminating leading zero when there's one
    let quantity: number = Number(input.value);
    //Validation
    if (isNaN(quantity)) {
      window.alert(
        'Please enter an integer number for the quantity and add it again!'
      );
    } else if (quantity < 0 || quantity > 100) {
      window.alert(
        'Please enter a quantity number between 0 to 100 and add it again!'
      );
      if (quantity < 0) {
        input.value = 0;
        localStorage.setItem(this.shopItem.id.toString(), input.value);
      } else {
        input.value = 100;
        localStorage.setItem(this.shopItem.id.toString(), input.value);
      }
    } else if (!Number.isInteger(Number(quantity))) {
      window.alert(
        'Please enter an integer number for the quantity and add it again!'
      );
      quantity = Math.floor(quantity);
    } else {
      //Add item
      if (quantity == 0) {
        localStorage.removeItem(this.shopItem.id.toString());
      } else if (quantity > 0 && quantity <= 100) {
        localStorage.setItem(this.shopItem.id.toString(), quantity.toString());
      }
    }
  }
}
