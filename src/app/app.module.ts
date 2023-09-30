import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartItemComponent } from './cart/cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './products/search.pipe';
import { CartService } from './cart/cart.service';
import { TimePipe } from './products/time.pipe';
import { SortPipe } from './products/sort.pipe';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SortPipe,
    TimePipe,
    SearchPipe,
    AppComponent,
    CartComponent,
    HeaderComponent,
    CartItemComponent,
    CartListComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFilterComponent,
    ProductDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
