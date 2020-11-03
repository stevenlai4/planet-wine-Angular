import { Injectable } from '@angular/core';
import { Shop } from '../shop/shop.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shop: Shop[] = [
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

  constructor() {}

  getShop(): Shop[] {
    return this.shop;
  }
}
