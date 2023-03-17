import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'products/create', component: CreateProductComponent},
  { path: 'categories/create', component: CreateCategoryComponent},
  { path: 'products', component:ProductListComponent},
  { path: 'products/:productId', component:ProductDetailsComponent},
  { path: 'products/category/:categoryId', component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
