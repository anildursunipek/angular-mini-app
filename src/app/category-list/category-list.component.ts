import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: Category | undefined;
  displayAll = true;

  constructor(private route: ActivatedRoute) {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
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
