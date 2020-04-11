import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  totalPrice: number = 0;
  private total: Subject<number> = new Subject<number>();
  public totalObs = this.total.asObservable();

  constructor() {}
  getCart(): Product[] {
    return this.cart;
  }

  addProduct(product: Product): void {
    this.cart.unshift(product);
    this.totalPrice += product.price;
    this.total.next(this.totalPrice);
  }

  deleteProduct(product: Product): void {
    const index: number = this.cart.findIndex((prod) => prod.id == product.id);
    if (index != -1) {
      this.cart.splice(index, 1);
      this.totalPrice -= product.price;
      this.total.next(this.totalPrice);
    }
  }
}
