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

  product = {
    id: 1,
    name: "Iphone 14",
    price: 1000,
    imageUrl: "iphone_14_.jpg",
    isActive: true
  }

}
