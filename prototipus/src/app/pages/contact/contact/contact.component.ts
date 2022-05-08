import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CREDENTIALS') === null) {
      this.navbarService.userLoggedIn.next(false);
    } else {
      this.navbarService.userLoggedIn.next(true);
    }
  }

}
