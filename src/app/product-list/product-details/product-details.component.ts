import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // @Input() prd: Product;
  // @Output() unSelectEvent = new EventEmitter<void>();

  product : Product | undefined;
  productRepository : ProductRepository;
  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["productId"];
      this.product = this.productRepository.getProductById(id);
    })
  }

  // unSelectProduct(){
  //   this.unSelectEvent.emit();
  // }
}
