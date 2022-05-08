import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  amount: number = 0;

  constructor(public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.getProductsFromLocalStorage().map(prod => {
      this.products.push(prod);
      this.amount = this.amount + prod.price;
    });
  }

  removeFromCart(product: Product){
    this.navbarService.removeProductFromCart(product);
  }

  addCartToOrder(){
    this.navbarService.addCartToOrder();
  }
}
