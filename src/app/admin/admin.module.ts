import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LayoutsModule
  ],
  exports: [
    HomeModule,
    LayoutsModule
  ]
})
export class AdminModule { }
