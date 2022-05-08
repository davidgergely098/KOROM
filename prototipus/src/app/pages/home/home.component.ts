import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CREDENTIALS') === null) {
      this.navbarService.userLoggedIn.next(false);
    } else {
      this.navbarService.userLoggedIn.next(true);
    }
  }

}
