import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UnitsComponent }
]

@NgModule({
  declarations: [
    UnitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UnitsComponent
  ]
})
export class UnitsModule { }
