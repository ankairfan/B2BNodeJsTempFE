import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { RouterModule, Routes } from '@angular/router';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UnitPipePipe } from './pipe/unit-pipe.pipe';


const routes: Routes = [
  { path: '', component: UnitsComponent }
]

@NgModule({
  declarations: [
    UnitsComponent,
    UnitEditComponent,
    UnitPipePipe

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
    UnitsComponent,
    UnitEditComponent
  ]
})
export class UnitsModule { }
