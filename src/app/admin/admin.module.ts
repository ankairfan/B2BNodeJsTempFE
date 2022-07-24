import { LoginModule } from './login/login.module';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LayoutsModule,
    LoginModule
  ],
  exports: [
    HomeModule,
    LayoutsModule,
    LoginModule
  ]
})
export class AdminModule { }
