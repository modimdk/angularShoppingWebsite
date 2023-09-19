import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartItemComponent } from './cart/cart-list/cart-item/cart-item.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TimePipe } from './products/time.pipe';
import { SortPipe } from './products/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
    ProductFilterComponent,
    FilterPipe,
    TimePipe,
    SortPipe
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
