import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product";

// Local Service
@Injectable()
export class ProductService{
  private url = "https://ng-shopapp-c5cd5-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient){}

  getProducts(categoryId: number): Observable<Product[]>{
    return this.http
      .get<Product[]>(this.url + "products.json")
      .pipe(
        map(data=>{
          const products: Product[] = [];

          for(const key in data){
            if(categoryId){
              if(categoryId == data[key].categoryId){
                products.push({...data[key], id:key});
              }
            }else{
              products.push({...data[key], id:key});
            }
          }
          return products
        })
      )
  }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(this.url + "products/" + id + ".json" );
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url + "products.json", product);
  }
}
