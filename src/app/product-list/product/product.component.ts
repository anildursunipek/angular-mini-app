import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // Fields and methods
  products : Product[];
  selectedProduct : Product | null
  productRepository : ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
  }

  selectProduct(product: Product){
    this.selectedProduct = product;
  }

  unSelectProduct(){
    this.selectedProduct = null;
  }
}
