import { Product } from "./product"

export class ProductRepository{
  private products : Product[] = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      imageUrl: "iphone_12.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      name: "Iphone 13",
      price: 1100,
      imageUrl: "iphone_13.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      name: "Iphone 14",
      price: 1000,
      imageUrl: "iphone_14_.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      name: "Amazon Fire TV 75",
      price: 914,
      imageUrl: "television_1.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      name: "Impecca 24-Inch",
      price: 129,
      imageUrl: "television_2.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 6,
      name: "LG 32LM570BPUA 32",
      price: 339,
      imageUrl: "television_3.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 7,
      name: "SkyTech Shadow 3.0 Gaming Computer PC Desktop",
      price: 1299,
      imageUrl: "computer_1.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 8,
      name: "HP Envy 34 Desktop",
      price: 3800,
      imageUrl: "computer_2.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 9,
      name: "OMEN 2021 30L GeForce RTX 3080 10GB Gaming Desktop",
      price: 6999,
      imageUrl: "computer_3.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    },

  ]

  getProducts() : Product[]{
    return this.products.filter(p=>p.isActive);
  }

  getProductById(id:number): Product | undefined{
    return this.products.find(p=>p.id == id);
  }

  getProductByCategoryId(id:number): Product[]{
    return this.products.filter(p=>p.categoryId == id);
  }
}
