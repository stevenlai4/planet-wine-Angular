import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop/shop.model';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  shopList: Shop[] = [];
  cartItems = [];

  constructor(private shopService: ShopService) {
    console.log(this.cartItems);
  }

  ngOnInit(): void {
    this.shopList = this.shopService.getShop();
    this.addCartItems();
  }

  addCartItems(): void {
    for (let i = 0; i < localStorage.length; i++) {
      let key: number = parseInt(localStorage.key(i));

      for (let j = 0; j < this.shopList.length; j++) {
        if (key === this.shopList[j].id) {
          this.cartItems.push({
            id: this.shopList[j].id,
            name: this.shopList[j].name,
            price: this.shopList[j].price,
            image: this.shopList[j].image,
            qty: localStorage.getItem(key.toString()),
          });
        }
      }
    }
  }
}
