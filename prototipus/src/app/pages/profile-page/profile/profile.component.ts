import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser?: User;
  showAlertMessage: boolean = false;
  showSuccessMessage: boolean = false;

  profileInfo: FormGroup = this._fb.group({
    Name: ['', []],
    Password: ['', []],
    Password2: ['', []],
    Email: ['', []],
    Phone: ['', []],
  });

  constructor(private userService: UserService, private _fb: FormBuilder, public navbarService: NavbarService, public router: Router) { }

  ngOnInit(): void {
      console.log(this.navbarService.userLoggedIn);
      this.userService.getUserByRefId(JSON.parse(sessionStorage.getItem('CREDENTIALS')!)).subscribe(resp => {
        console.log(resp);
        this.currentUser = resp[0];
        this.profileInfo.controls['Name'].setValue(this.currentUser.userName);
        this.profileInfo.controls['Password'].setValue(this.currentUser.password);
        this.profileInfo.controls['Email'].setValue(this.currentUser.email);
        this.profileInfo.controls['Phone'].setValue(this.currentUser.phone);
      });
  }

  onSubmit() {
    if (this.profileInfo.controls['Password'].value == this.profileInfo.controls['Password2'].value) {
      this.currentUser!.userName = this.profileInfo.controls['Name'].value;
      this.currentUser!.email = this.profileInfo.controls['Email'].value;
      this.currentUser!.password = this.profileInfo.controls['Password'].value;
      this.currentUser!.phone = this.profileInfo.controls['Phone'].value;
      this.userService.updateUsers(this.currentUser!);
      this.showSuccessMessage = true;
      this.showAlertMessage = false;
    } else {
      this.showAlertMessage = true;
    }
  }

  logOut(){
    sessionStorage.removeItem('CREDENTIALS');
    this.router.navigate(["sign-in"]);
    window.location.reload();
  }

}
