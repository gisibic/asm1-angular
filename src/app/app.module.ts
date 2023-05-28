import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './admins/product-add/product-add.component';
import { ProductEditComponent } from './admins/product-edit/product-edit.component';
import { ProductDetailComponent } from './Users/product-detail/product-detail.component';
import { HomePageComponent } from './Users/home-page/home-page.component';
import { PageNotFoundComponent } from './Users/page-not-found/page-not-found.component';
import { ProductListComponent } from './component/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductEditComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
