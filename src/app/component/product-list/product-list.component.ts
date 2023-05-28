import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product!: IProduct[]

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.product = data
    })
  }

  removeItem(id: number) {
    if (confirm('Bạn chắc chắn muốn xóa sản phẩm này ?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.product = this.product.filter(product => product.id !== id)
      })
    }
  }
}
