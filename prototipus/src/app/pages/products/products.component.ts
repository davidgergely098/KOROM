import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from "../../shared/services/user.service";
import firebase from "firebase/compat";
import User = firebase.User;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  img: any;
  isAdmin: boolean = false;

  constructor(private productService: ProductService, public navbarService: NavbarService, public userService: UserService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CREDENTIALS') === null) {
      this.navbarService.userLoggedIn.next(false);
    } else {
      this.navbarService.userLoggedIn.next(true);
      this.userService.getUserByRefId(JSON.parse(sessionStorage.getItem('CREDENTIALS')!)).subscribe(resp => {this.isAdmin = resp[0].admin});
      this.navbarService.userIsAdmin.next(this.isAdmin);
    }

    this.productService.getProducts().subscribe(resp => {
      resp.map(product => {
        this.products.push(product);
      });
    });
  }


  addToCart(product: Product) {
    this.navbarService.addProductToCart(product);
  }

  updateProduct(product: Product){
    this.productService.updateProducts(product);
  }

  removeProduct(product: Product){
    this.productService.deleteProducts(product);
  }

}
