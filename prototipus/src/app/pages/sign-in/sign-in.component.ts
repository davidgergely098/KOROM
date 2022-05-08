import { JsonPipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  showAlertMessage: boolean = false;

  signInInfo: FormGroup = this._fb.group({
    Name: ['', []],
    Password: ['', []],
  });

  constructor(private _fb: FormBuilder, public navbarService: NavbarService, private userService: UserService, public router: Router, public ngZone: NgZone) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CREDENTIALS') !== null) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmit(): void {
    this.userService.getUsers().subscribe(resp => {
      resp.map(user => {
        if (user.userName == this.signInInfo.controls['Name'].value &&
          user.password == this.signInInfo.controls['Password'].value) {
          this.ngZone.run(() => {
            if (user.admin){
              this.navbarService.userIsAdmin.next(true);
            }
            this.navbarService.userLoggedIn.next(true);
            sessionStorage.setItem('CREDENTIALS', JSON.stringify(user.documentReference));
            this.router.navigate(["profile"]);
          });
        } else {
          this.showAlertMessage = true;
        }
      });
    });
  }

}
