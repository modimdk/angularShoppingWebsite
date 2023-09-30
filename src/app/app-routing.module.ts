import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent },
  // {path: 'products', component: ProductsComponent, 
  //   children: [
  //     {path:'', component: ProductListComponent},
  //     {path:':id', component: ProductDetailComponent}
  // ]},
  {path: 'cart', component: CartComponent },
  {path: 'detail/:id', component: ProductDetailComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
