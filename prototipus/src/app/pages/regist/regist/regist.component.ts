import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {
  newUser!: User;
  showAlertMessage: boolean = false;
  showSuccessMessage: boolean = false;

  newUserInfo: FormGroup = this._fb.group({
    Name: ['', []],
    Password: ['', []],
    Password2: ['', []],
    Email: ['', []],
    Phone: ['', []],
  });


  constructor(private _fb: FormBuilder, private userService: UserService, public navbarService: NavbarService, public router: Router, public productService: ProductService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CREDENTIALS') !== null) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmit() {
    if (this.newUserInfo.controls['Password'].value == this.newUserInfo.controls['Password2'].value) {
      this.newUser = {
        userName: this.newUserInfo.controls['Name'].value,
        email: this.newUserInfo.controls['Email'].value,
        phone: this.newUserInfo.controls['Phone'].value,
        password: this.newUserInfo.controls['Password'].value,
        admin: false,
      }
      this.userService.createUser(this.newUser);
      this.showSuccessMessage = true;
      sessionStorage.setItem('CREDENTIALS', JSON.stringify(this.newUser.documentReference));
      this.router.navigate(["profile"]);
    } else {
      this.showAlertMessage = true;
    }

  }

}
