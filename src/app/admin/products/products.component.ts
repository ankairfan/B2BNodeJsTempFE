import { ErrorService } from './../../services/error.service';
import { ProductService } from './service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (result: Product[]) => {
        this.products = result;
      },(error) => {
        this.errorService.errorHandler(error);
      });

  }
}
