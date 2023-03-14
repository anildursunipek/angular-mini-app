import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // Fields and methods
  constructor() { }

  ngOnInit(): void {
  }

  // product = {
  //   id: 1,
  //   name: "Iphone 14",
  //   price: 1000,
  //   imageUrl: "iphone_14_.jpg",
  //   isActive: true
  // }

  private products:any[] = [
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
      isActive: false
    },
    {
      id: 3,
      name: "Iphone 16",
      price: 1200,
      imageUrl: "iphone_14_.jpg",
      isActive: false
    }
  ]

  getProducts(){
    return this.products.filter(p => p.isActive)
  }
}
