import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    ShopComponent,
    ShopItemComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
