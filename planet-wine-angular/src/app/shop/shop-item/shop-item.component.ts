import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Shop Items Data
  productItems: Shop[] = [
    new Shop(
      1,
      '2018 Zinfandel 750mL',
      'Red Wine',
      30.0,
      'This is Red Wine 1',
      '../../assets/img/2018 Zinfandel.jpeg'
    ),
    new Shop(
      2,
      '2017 Estate Grown Cabernet Sauvignon 750mL',
      'Red Wine',
      35.0,
      'This is Red Wine 2',
      '../../assets/img/2017 Estate Grown Cabernet Sauvignon.jpeg'
    ),
    new Shop(
      3,
      '2018 Heritage Blend 750mL',
      'Red Wine',
      45.0,
      'This is Red Wine 3',
      '../../assets/img/2018 Heritage Blend.jpeg'
    ),
    new Shop(
      4,
      '2018 Chardonnay Shale and Stone 750mL',
      'White Wine',
      30.0,
      'This is Red Wine 4',
      '../../assets/img/2018 Chardonnay Shale and Stone.jpeg'
    ),
    new Shop(
      5,
      '2018 Chenin Blanc 750mL',
      'White Wine',
      45.0,
      'This is White Wine 5',
      '../../assets/img/2018 Chenin Blanc.jpeg'
    ),
    new Shop(
      6,
      '2018 Rachel Rossi Reserve Sauvignon Blanc 750mL',
      'White Wine',
      75.0,
      'This is White Wine 6',
      '../../assets/img/2018 Rachel Rossi Reserve Sauvignon Blanc.jpeg'
    ),
    new Shop(
      7,
      '2018 Planet Zinfandel 750mL',
      'Red Wine',
      30.0,
      'This is White Wine 7',
      '../../assets/img/2018 Zinfandel.jpeg'
    ),
    new Shop(
      8,
      '2019 Sauvignon Blanc 750mL',
      'White Wine',
      30.0,
      'This is White Wine 8',
      '../../assets/img/2019 Sauvignon Blanc.jpeg'
    ),
  ];

  // Fill in value that have already been saved
  fillInput(itemId: number): string {
    if (localStorage.getItem(itemId.toString())) {
      return localStorage.getItem(itemId.toString());
    }

    return '0';
  }

  // Click Event Listener for add button
  addQuantityEvent(itemId: number, input: any) {
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
      } else {
        input.value = 100;
      }
    } else if (!Number.isInteger(Number(quantity))) {
      window.alert(
        'Please enter an integer number for the quantity and add it again!'
      );
      quantity = Math.floor(quantity);
    } else {
      //Add item
      if (quantity == 0) {
        localStorage.removeItem(itemId.toString());
      } else if (quantity > 0 && quantity <= 100) {
        localStorage.setItem(itemId.toString(), quantity.toString());
      }
    }
  }
}
