import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit(): void {
    //Lấy id product từ route hiện tại
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //tìm product tương ứng dựa trên id product vừa có
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Đã thêm sản phẩm vào giỏ hàng!');
  }
}