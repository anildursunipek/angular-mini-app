import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [CategoryService]
})
export class CreateCategoryComponent implements OnInit {
  // Two Way Binding
  model : any = { }
  error : string= "";
  constructor(
    private categoryService : CategoryService,
    private route : Router) { }

  ngOnInit(): void {
  }

  saveCategory(form: NgForm){
    const category : Category = {
      name: this.model.name
    }
    if(form.valid){
      this.categoryService.createCategory(category).subscribe(data => {
        this.route.navigate(["/products"]);
      })
    }else{
      this.error = "Check the form.";
    }
  }
}
