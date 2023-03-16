import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Fields and methods
  title = 'Products';
  constructor(private http: HttpClient){}


  createProduct(){

    const product = {
      name: "OMEN 2021 30L GeForce RTX 3080 10GB Gaming Desktop",
      price: 6999,
      imageUrl: "computer_3.jpg",
      isActive: true,
      categoryId: 3,
      description: "Lorem ipsum dolor sit amet."
    }

    this.http.post(
      "https://ng-shopapp-c5cd5-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      product
      ).subscribe(data => console.log(data));
  }
}
