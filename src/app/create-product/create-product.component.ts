import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CategoryService]
})
export class CreateProductComponent implements OnInit {
  categories : Category[] = []
  constructor(
    private productService: ProductService,
    private route: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
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
