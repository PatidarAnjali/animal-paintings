import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule, CommonModule, MatSnackBarModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];

  totalPrice: number = 0;
  
  // inject HttpClient and MatSnackBar
  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number{
    let total = 0;
    for(let item of this.cartItems){
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
  }

  checkOut(): void {
    const order = {
      items: this.cartItems.map(item => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: 1 // you'll want to track quantity properly later
      })),
      totalPrice: this.totalPrice,
      customerEmail: 'customer@example.com' // get from a form later
    };

    this.http.post('http://localhost:3000/orders', order).subscribe({
      next: (response) => {
        console.log('Order created:', response);
        this.clearCart();
        this.snackBar.open('Order placed successfully!', '', { duration: 3000 });
      },
      error: (error) => {
        console.error('Order failed:', error);
        this.snackBar.open('Failed to place order', '', { duration: 3000 });
      }
    });
  }
}
