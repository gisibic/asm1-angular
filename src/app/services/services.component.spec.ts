import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from './services.component';

describe('ProductService', () => {
  let component: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    TestBed.inject(ProductService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
