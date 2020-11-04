import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    ShopComponent,
    ShopItemComponent,
    CartComponent,
    CartItemComponent,
    ShopItemDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
