import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  // Fields and methods
  title = 'Products';
  constructor(
    private http: HttpClient,
    private productService: ProductService){}


  createProduct(){

    const product = {
      name: "OMEN 2021 30L GeForce RTX 3080 10GB Gaming Desktop",
      price: 6999,
      imageUrl: "computer_3.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    }

    this.productService.createProduct(product).subscribe(data => console.log(data));
  }
}
