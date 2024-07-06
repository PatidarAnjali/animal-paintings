import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // To import the getProducts() method
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FlexModule, MatCardModule, MatSnackBarModule, MatInputModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
  ){} // instance of product service to load products onto lifecycle hook

  ngOnInit(): void { // interface
    // load products here from mockoon
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open("Product added to cart!", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  applyFilter(event: Event): void{
    let searchTerm = (event.target as HTMLInputElement).value; // read value from entire value field
    searchTerm = searchTerm.toLowerCase(); // convert to lower case

    this.filteredProducts = this.products.filter(
      product => product.name.toLowerCase().includes(searchTerm)
    )
  }
}
