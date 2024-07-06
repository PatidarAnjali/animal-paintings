import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // To import the getProducts() method
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FlexModule, MatCardModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService){} // instance of product service to load products onto lifecycle hook

  ngOnInit(): void { // interface
    // load products here from mockoon
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
