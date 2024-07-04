import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + "/products"; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{ // type = observable and Product class (get array)
    return this.http.get<Product[]>(this.apiUrl);
  }
}
