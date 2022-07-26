import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductPipe } from './pipe/product.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes = [
  { path: '', component: ProductsComponent }
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductPipe,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ProductsComponent,
    ProductEditComponent
  ]
})
export class ProductsModule { }
