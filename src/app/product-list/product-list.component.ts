import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Fields and methods
  products : Product[] = [];
  // selectedProduct : Product | null
  productRepository : ProductRepository;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.productRepository = new ProductRepository();
    // this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params["categoryId"]){
        this.products = this.productRepository.getProductByCategoryId(params["categoryId"]);
      }else{
        this.http.get<Product[]>("https://ng-shopapp-c5cd5-default-rtdb.europe-west1.firebasedatabase.app/products.json")
          .subscribe(result=>{
            for(const key in result){
              this.products.push({...result[key], id: key})
            }
            // console.log(this.products)
          }
          );
      }
    })
  }
  // selectProduct(product: Product){
  //   this.selectedProduct = product;
  // }

  // unSelectProduct(){
  //   this.selectedProduct = null;
  // }
}
