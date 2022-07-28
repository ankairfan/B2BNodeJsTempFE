import { CategoryService } from './../service/category.service';
import { Category } from './../model/category';
import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  category: Category=new Category();

  filterText: string = "";

  constructor(
    private categoryService: CategoryService,
    private errorService: ErrorService,
    private toastrService: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getCategories();


  }


  getCategories() {
    this.categoryService.getCategories().subscribe(
      (result: Category[]) => {
        this.categories = result;
      }, (error) => {
        this.errorService.errorHandler(error);
      }
    );
  }
  deleteCategory(categoryId: string) {
    this.categoryService.removeCategory(categoryId).subscribe(
      (result: Category) => {
        this.categories = this.categories.filter(c => c._id !== categoryId);
        this.toastrService.success('Kategori Başarıyla silindi!.', 'Başarılı');
        this.getCategories();
      }, (error) => {
        this.errorService.errorHandler(error);
      }
    );
  }






}





