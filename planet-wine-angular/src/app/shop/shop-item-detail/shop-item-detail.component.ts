import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '../shop.model';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.scss'],
})
export class ShopItemDetailComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {}

  sub;
  id;
  shopItem: Shop;

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((params) => {
      this.id = params.get('id');
      let shop = this.shopService.getShop();
      this.shopItem = shop.find((si) => si.id == this.id);
    });
  }
}
