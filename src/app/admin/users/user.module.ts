import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserPipe } from './user/user.pipe';



const routes: Routes = [
  { path: '', component: UserComponent }
]
@NgModule({
  declarations: [
    UserComponent,
    UserEditComponent,
    UserPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    UserComponent,
    UserEditComponent
  ]
})
export class UserModule { }
