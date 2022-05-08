import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  title: BehaviorSubject<string> = new BehaviorSubject('');
  userLoggedIn = new BehaviorSubject(false);
  userIsAdmin = new BehaviorSubject(false);


  addProductToCart(product: Product) {
      let myArr = this.getProductsFromLocalStorage();
      if (!myArr.includes(product)) {
        myArr.push(product);
        localStorage.setItem("cartElements", JSON.stringify(myArr));
      }
      product.stock--;
  }

  removeProductFromCart(product: Product) {
    let myArr = this.getProductsFromLocalStorage();
    console.log(product);
    for (let i = 0; i < myArr.length; ++i) {
      if (myArr[i].documentReference === product.documentReference) {
        myArr.splice(i, 1);
      }
    }
    localStorage.setItem("cartElements", JSON.stringify(myArr));
    window.location.reload();
  }

  getProductsFromLocalStorage(): Product[] {
    return JSON.parse(localStorage.getItem("cartElements")!) || [];
  }

  addCartToOrder() {
    console.log(this.getProductsFromLocalStorage);
  }
}
