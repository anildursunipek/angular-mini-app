import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
}
