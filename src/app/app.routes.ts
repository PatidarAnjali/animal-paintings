import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

export const routes: Routes = [
    {path: "", redirectTo: "/products", pathMatch: "full"},
    {path: "products", component: ProductListComponent},
    {path: "cart", component: CartViewComponent}
];
