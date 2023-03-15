import { Category } from "./category";

export class CategoryRepository{
  private categories : Category[] = [
    {id:1, name: "Computers"},{id:2, name: "Mobile Phone"},{id:3, name: "Television"},
  ]

  public getCategories(): Category[]{
    return this.categories
  }

  public getCategoriesById(id: number): Category | undefined{
    return this.categories.find(p=>p.id == id);
  }
}
