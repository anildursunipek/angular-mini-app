import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category | undefined;
  displayAll = true;

  constructor(
    private route: ActivatedRoute,
    private categoryService : CategoryService ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  selectCategory(category?: Category){
    if(category){
      this.selectedCategory = category;
      this.displayAll= false;
    }else{
      this.selectedCategory = undefined;
      this.displayAll = true;
    }
  }
}
