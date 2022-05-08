import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newProduct!: Product;
  category!: string;
  img!: string;

  productInfo: FormGroup = this._fb.group({
    Name: ['', []],
    Price: ['', []],
    Category: ['', []],
    Stock: ['', []],
    Img: ['', []],
  });

  constructor(private _fb: FormBuilder, private productService: ProductService,public navbarService: NavbarService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    switch (this.productInfo.controls['Category'].value) {
      case 'woman':
        this.category = '8sg8g44RoQZl2aulIR0v';
        break;
      case 'man':
        this.category = '2Ay9BgcjxASP5QSbGgOL';
        break;
      case 'child':
        this.category = 'Ggsqa1YbW6mrjW3sY0cu';
        console.log(this.category);
    }

    this.newProduct = {
      name: this.productInfo.controls['Name'].value,
      price: this.productInfo.controls['Price'].value,
      categoryId: this.category,
      stock: this.productInfo.controls['Stock'].value,
      base64Img: this.productInfo.controls['Img'].value,
    }
    this.productService.createProduct(this.newProduct);
  }

  setFormcontrolImageBase64Value(result: any) {
    const file = result.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    const self = this;
    reader.onload = function () {
      //me.modelvalue = reader.result;
      self.productInfo.controls['Img'].setValue(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
