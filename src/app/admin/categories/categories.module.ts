import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPipe } from './pipe/category.pipe';

const routes: Routes = [
  { path: '', component: CategoriesComponent }
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CategoriesComponent
  ]

})
export class CategoriesModule { }
