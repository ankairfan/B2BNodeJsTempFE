import { ProductEditComponent } from './admin/products/product-edit/product-edit.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './admin/layouts/layouts.component';
import { AuthGuard } from './admin/login/guard/auth.guard';
import { ProductsComponent } from './admin/products/products.component';

const routes: Routes = [
  {
    path: 'admin-login',
    component: LoginComponent,
    loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    component: LayoutsComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('./admin/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent,
        loadChildren: () => import('./admin/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'product',
        component: ProductEditComponent,
        loadChildren: () => import('./admin/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'product/:id',
        component: ProductEditComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
