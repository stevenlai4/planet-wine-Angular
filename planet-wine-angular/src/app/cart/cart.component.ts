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

  constructor(
    /*private data: CartItemService*/
    private shopService: ShopService
  ) {
    console.log(this.cartItems);
  }

  ngOnInit(): void {
    // this.data.getData().subscribe((product: any) => {
    //   this.addProduct(product);
    // });
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

  // addProduct(product: any) {
  //   let productExists = false;

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].id === product.id) {
  //       this.cartItems[i].qty++;
  //       productExists = true;
  //       break;
  //     }
  //   }

  //   if (!productExists) {
  //     this.cartItems.push({
  //       id: product.id,
  //       name: product.name,
  //       type: product.type,
  //       price: product.price,
  //       description: product.description,
  //       image: product.image,
  //       qty: product.qty,
  //     });
  //   }
  // }
}
