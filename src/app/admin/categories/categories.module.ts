import { CategoryListComponent } from './category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CategoryPipePipe } from './pipe/category-pipe.pipe';
import { CategoryEditComponent } from './category-edit/category-edit.component';


const routes: Routes = [
  { path: '', component: CategoryListComponent }
]

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryPipePipe,
    CategoryEditComponent,

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
    CategoryListComponent,
    CategoryEditComponent

  ]


})
export class CategoriesModule { }
