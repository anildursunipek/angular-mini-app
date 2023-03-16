import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

// Local Service
@Injectable()
export class ProductService{
  private products_url = "https://ng-shopapp-c5cd5-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient){}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.products_url);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.products_url, product)
  }
}
