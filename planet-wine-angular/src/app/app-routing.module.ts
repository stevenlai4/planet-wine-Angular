import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from '../app/shop/shop.component';
import { CartComponent } from '../app/cart/cart.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop/:id',
    component: ShopItemDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
