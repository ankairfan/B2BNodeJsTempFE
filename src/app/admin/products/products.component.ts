import { ToastrService } from 'ngx-toastr';
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

  filterText: string = "";

  constructor(
    private productService: ProductService,
    private errorService: ErrorService,
    private toastrService:ToastrService,
    ) { }



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

deleteProduct(productId: string) {
  this.productService.deleteProduct(productId).subscribe(
    (result: Product) => {
      this.products = this.products.filter(p => p._id !== productId);
      this.toastrService.success('Ürün Başarıyla silindi!.', 'Başarılı');
      this.getProducts
    },(error) => {
      this.errorService.errorHandler(error);
    }
  );
}




}






