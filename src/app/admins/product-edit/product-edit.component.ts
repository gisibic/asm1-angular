import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/services.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log('id', id)

      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          image: data.image
        })
      }, error => console.log(error.message))
    })
  }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || ''
      };
      this.productService.updateProduct(product).subscribe((product) => {
        console.log('product', product);
      });
    }
  }
}
