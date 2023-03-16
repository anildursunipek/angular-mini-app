import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  // Fields and methods
  products : Product[] = [];
  // selectedProduct : Product | null
  // productRepository : ProductRepository;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) {
    // this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
      // Old codes
      // if(params["categoryId"]){
      // }else{
      //   this.productService.getProducts().subscribe(result=>{
      //       for(const key in result){
      //         this.products.push({...result[key], id: key})
      //       }
      //     }
      //   );
      // }
    })
  }

  // Old codes
  // selectProduct(product: Product){
  //   this.selectedProduct = product;
  // }

  // unSelectProduct(){
  //   this.selectedProduct = null;
  // }
}
