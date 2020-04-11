import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.totalObs.subscribe((total) => {
      this.total = total;
    });
  }
  deleteFromCart(product: Product): void {
    this.cartService.deleteProduct(product);
  }
}
