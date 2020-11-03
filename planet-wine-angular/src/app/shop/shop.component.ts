import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Shop } from '../shop/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./scss/shop.component.scss'],
})
export class ShopComponent implements OnInit {
  shopList: Shop[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopList = this.shopService.getShop();
  }
}
