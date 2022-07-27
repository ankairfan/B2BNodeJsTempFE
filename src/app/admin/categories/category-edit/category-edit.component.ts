import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryId: string;
  category: Category;
  categoryForm: FormGroup;
  title: string;
  btnText: string;
  type: string;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    if (this.categoryId == null) {
      this.title = "Kategori ekle";
      this.btnText = "Ekle";
      this.type = "add";
    } else {
      this.title = "Kategori düzenle";
      this.btnText = "Güncelle";
      this.type = "edit";
      this.categoryService.getCategoryById(this.categoryId).subscribe(result => {
        this.category = result;
        this.categoryForm.controls["name"].setValue(this.category.name);

      });
    }
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }


  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.type == "add") {
        this.categoryService
          .addCategory(this.categoryForm.value)
          .subscribe(result => {
            this.router.navigateByUrl("/admin/categories");
          });
      }
      else {
        this.categoryService
          .updateCategory(this.categoryId, this.categoryForm.value)
          .subscribe(result => {
            this.router.navigateByUrl("/admin/categories");
          });
      }

    }
  }

}
