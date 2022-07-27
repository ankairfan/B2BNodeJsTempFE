import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, mergeMap, Observable } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { Category } from '../../categories/model/category';
import { CategoryService } from '../../categories/service/category.service';
import { Unit } from '../../units/model/unit';
import { UnitService } from '../../units/service/unit.service';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  categories: Category[];
  formData: FormData = null;
  productForm: FormGroup;
  units: Unit[];
  productId: string;
  type: string;

  constructor
    (
      private productService: ProductService,
      private categoryService: CategoryService,
      private unitService: UnitService,
      private errorService: ErrorService,
      private toastrService: ToastrService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  get pictureFile() {
    return this.productForm.get("pictureFile");
  };
  get category() {
    return this.productForm.get("categoryBy");
  };
  get unit() {
    return this.productForm.get("unitBy");
  };

  upload(files: any) {
    let fileData = files.target.files[0];
    this.formData = new FormData();
    this.formData.append("picture", fileData);
  }





  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });

    this.unitService.getUnits().subscribe(result => {
      this.units = result;
    });

    this.productForm = new FormGroup({
      code: new FormControl(""),
      name: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      enteringProduct: new FormControl("", Validators.required),
      taxRate: new FormControl("", Validators.required),
      description: new FormControl(""),
      picture: new FormControl(""),
      categoryBy: new FormControl("", Validators.required),
      unitBy: new FormControl("", Validators.required),
      pictureFile: new FormControl("")
    });

    this.productId = this.route.snapshot.paramMap.get("id");
    if (this.productId == null) {
      this.type = "add";
    } else {
      this.type = "edit";
    this.productService.getProductById(this.productId).subscribe(result => {
      this.product = result;
      this.productForm.controls['code'].setValue(this.product.code);
      this.productForm.controls['name'].setValue(this.product.name);
      this.productForm.controls['price'].setValue(this.product.price);
      this.productForm.controls['enteringProduct'].setValue(this.product.enteringProduct);
      this.productForm.controls['taxRate'].setValue(this.product.taxRate);
      this.productForm.controls['description'].setValue(this.product.description);
      this.productForm.controls['categoryBy'].setValue(this.product.categoryBy);
      this.productForm.controls['unitBy'].setValue(this.product.unitBy);
      this.productForm.controls['picture'].setValue(this.product.picture);
    });

  }
  }

  displayCategoryName(category: any) {
    if (category) {
      return category.name;
    }
    return null;
  }
  displayUnitName(unit: any) {
    if (unit) {
      return unit.name;
    }
    return null;
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.type == "add") {
      this.productService
        .saveProductImage(this.formData)
        .pipe(
          map(result => {
            this.productForm.controls['picture'].setValue(result.url);
          }),
          mergeMap(() => this.productService.addProduct(this.productForm.value))
        )
        .subscribe(result => {
          this.router.navigateByUrl("/admin/products");
        });
    }

    else {
  if (this.formData == null) {
    this.productService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe(result => {
        this.router.navigateByUrl("/admin/products");
      });
  }
  else {
    this.productService
      .saveProductImage(this.formData)
      .pipe(
        map(result => {
          this.productForm.controls['picture'].setValue(result.url);
        }),
        mergeMap(() =>
          this.productService.updateProduct(this.productId, this.productForm.value)
        )
      )
      .subscribe(result => {
        this.router.navigateByUrl("/admin/products");
      });
  }
}
    }
  }


}

