import { Component, OnInit } from '@angular/core';
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

  constructor(
    private categoryService : CategoryService,
    private route : Router) { }

  ngOnInit(): void {
  }

  saveCategory(name: any){
    const category : Category = {
      name: name.value
    }
    this.categoryService.createCategory(category).subscribe(data => {
      this.route.navigate(["/products"]);
    })
  }
}
