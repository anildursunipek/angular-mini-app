import { Product } from "./product"

export class ProductRepository{
  private products : Product[] = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      imageUrl: "iphone_12.jpg",
      isActive: true
    },
    {
      id: 2,
      name: "Iphone 13",
      price: 1100,
      imageUrl: "iphone_13.jpg",
      isActive: true
    },
    {
      id: 3,
      name: "Iphone 14",
      price: 1000,
      imageUrl: "iphone_14_.jpg",
      isActive: true
    }
  ]

  getProducts() : Product[]{
    return this.products.filter(p=>p.isActive);
  }

  getProductById(id:number): Product | undefined{
    return this.products.find(p=>p.id == id);
  }
}
