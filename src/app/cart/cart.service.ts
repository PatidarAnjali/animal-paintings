import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + "/cart";
  private apiCheckoutUrl = environment.apiUrl + "/checkout";

  constructor(private http: HttpClient) {}

  // addToCart method takes in parameter (product you want to add to cart)
  // returns an oservable to make it asynchronous
  // calls the post method on HTTP client and tell it that its of type Product
  // this.apiUrl = specify end point and then submit product as JSON format to cart

  addToCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCartItems(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<void>{
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkoutCart(products: Product[]): Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }
}
