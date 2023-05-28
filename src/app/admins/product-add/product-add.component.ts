import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.component';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {

  }

  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || ""
    }

    this.productService.addProduct(product).subscribe((product) => {
      console.log('product', product)
    })
  }
}
