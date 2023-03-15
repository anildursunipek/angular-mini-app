import { Product } from "./product"

export class ProductRepository{
  private products : Product[] = [
    {
      id: 1,
      name: "Iphone 14",
      price: 1000,
      imageUrl: "iphone_14_.jpg",
      isActive: true
    },
    {
      id: 2,
      name: "Iphone 15",
      price: 1100,
      imageUrl: "iphone_14_.jpg",
      isActive: true
    },
    {
      id: 3,
      name: "Iphone 16",
      price: 1200,
      imageUrl: "iphone_14_.jpg",
      isActive: false
    }
  ]

  getProducts() : Product[]{
    return this.products.filter(p=>p.isActive);
  }

  getProductById(id:number): Product | undefined{
    return this.products.find(p=>p.id == id);
  }
}
