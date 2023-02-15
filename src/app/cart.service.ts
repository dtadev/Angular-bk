import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}
  
  addToCart(product: Product) {
    this.items.push(product); //thêm product vào mảng items
  }

  getItems() {
    return this.items; //lay va tra ve item
  }

  clearCart() {
    this.items = [];
    return this.items; //empty gio hang
  }
  /* . . . */
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}