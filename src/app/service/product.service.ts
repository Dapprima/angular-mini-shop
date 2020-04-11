import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        imageUrl:
          'https://ak4.picdn.net/shutterstock/videos/208984/thumb/1.jpg',
        name: 'Ball',
        price: 45.6,
        discount: 0,
        oldPrice: 0,
      },
      {
        id: 2,
        imageUrl:
          'https://www.furniturerow.com/fr/images/products/TA-PKCLRT.JPG',
        name: 'Table',
        price: 25.6,
        discount: 0.4,
        oldPrice: 0,
      },
      {
        id: 3,
        imageUrl:
          'https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/800x800/9df78eab33525d08d6e5fb8d27136e95/w/r/wr014011_wilson-blade-100l-v7-0-tennis-racquet_1.jpg',
        name: 'Tennis racket',
        price: 35.6,
        discount: 0.3,
        oldPrice: 0,
      },
    ];
  }

  getProducts(): Observable<Product[]> {
    return of(
      this.products.map((product) => {
        product.oldPrice = product.price / (1 - product.discount);
        return product;
      })
    );
  }
}
