import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
  ],
  imports: [BrowserModule],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
