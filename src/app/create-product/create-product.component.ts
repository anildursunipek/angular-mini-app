import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  saveProduct(name:any, price:any, imageUrl:any, description:any, isActive:any, categoryId:any){
    const product = {
      name: name.value,
      price: price.value,
      imageUrl: imageUrl.value,
      isActive: isActive.checked,
      categoryId: categoryId.value,
      description: description.value
    }

    this.productService.createProduct(product).subscribe(data =>{
      this.route.navigate(["/products"]);
      }
    );
  }
}
