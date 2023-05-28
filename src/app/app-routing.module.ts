import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './admins/product-add/product-add.component';
import { ProductEditComponent } from './admins/product-edit/product-edit.component';
import { HomePageComponent } from './Users/home-page/home-page.component';
import { ProductDetailComponent } from './Users/product-detail/product-detail.component';
import { PageNotFoundComponent } from './Users/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: 'product/:id', component: ProductDetailComponent }
    ]
  },
  {
    path: 'admin',children: [
      { path: '', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
