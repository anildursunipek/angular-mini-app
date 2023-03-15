import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() prd: Product;
  @Output() unSelectEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  unSelectProduct(){
    this.unSelectEvent.emit();
  }
}
