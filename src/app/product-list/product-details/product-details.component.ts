import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {

  // @Input() prd: Product;
  // @Output() unSelectEvent = new EventEmitter<void>();

  product : Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["productId"];
      this.productService.getProductById(id).subscribe(result =>{
        this.product = {...result}
      })
    })
  }

  // unSelectProduct(){
  //   this.unSelectEvent.emit();
  // }
}
