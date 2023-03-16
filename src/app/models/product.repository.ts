import { Product } from "./product"

export class ProductRepository{
  private products : Product[] = [
    {
      name: "Iphone 12",
      price: 800,
      imageUrl: "iphone_12.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "Iphone 13",
      price: 900,
      imageUrl: "iphone_13.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "Iphone 14",
      price: 1000,
      imageUrl: "iphone_14_.jpg",
      isActive: true,
      categoryId: 1,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "Amazon Fire TV 75",
      price: 914,
      imageUrl: "television_1.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "Impecca 24-Inch",
      price: 129,
      imageUrl: "television_2.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "LG 32LM570BPUA 32",
      price: 339,
      imageUrl: "television_3.jpg",
      isActive: true,
      categoryId: 2,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "SkyTech Shadow 3.0 Gaming Computer PC Desktop",
      price: 1299,
      imageUrl: "computer_1.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    },
    {
      name: "HP Envy 34 Desktop",
      price: 3800,
      imageUrl: "computer_2.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    },
    {
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
