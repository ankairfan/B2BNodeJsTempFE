import { UnitsModule } from './units/units.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { LoginModule } from './login/login.module';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeModule,
    LayoutsModule,
    LoginModule,
    ProductsModule,
    CategoriesModule,
    UnitsModule
  ],
  exports: [
    HomeModule,
    LayoutsModule,
    LoginModule,
    ProductsModule,
    CategoriesModule,
    UnitsModule
  ]
})
export class AdminModule { }
