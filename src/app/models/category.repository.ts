import { Category } from "./category";

export class CategoryRepository{
  private categories : Category[] = [
    {id:1, name: "Computers"},{id:2, name: "Mobile Phone"},{id:3, name: "Television"},
  ]

  public getCategories(): Category[]{
    return this.categories
  }

  public getCategoriesById(id: number): Category[]{
    return this.categories.filter(p=>p.id == id);
  }
}
