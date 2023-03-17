import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  categories : Category[] = [];
  error : string = "";
  // Two way binding
  model : any = {
    "isActive": true,
    "categoryId": 0,
  };
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

  saveProduct(form: NgForm){
    const extensions = ["png", "jpg", "jpeg"];
    const extension = this.model.imageUrl.split(".").pop();
    if(extensions.indexOf(extension) == -1){
      this.error = "The image extension should only be jpg, jpeg or png."
      return;
    }

    if(this.model.categoryId == 0){
      this.error = "You have not selected a category.";
      return;
    }

    if(form.valid){
      const product = {
        name: this.model.name,
        price: this.model.price,
        imageUrl: this.model.imageUrl,
        isActive: this.model.isActive,
        categoryId: this.model.categoryId,
        description: this.model.description
      }

      this.productService.createProduct(product).subscribe(data =>{
        this.route.navigate(["/products"]);
        }
      );
    }else{
      this.error = "Check the form.";
    }
  }
}
