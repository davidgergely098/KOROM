import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.scss'],
  providers: [DatePipe]

})
export class PayingComponent implements OnInit {
  payingBy!: string;
  showAlertMessage: boolean = false;
  currentOrder!: Order;
  currentUser!: User;

  payingInfo: FormGroup = this._fb.group({
    Paying: ['', []],
  });

  constructor(private _fb: FormBuilder, public router: Router, private datePipe: DatePipe, private orderSrvice: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserByRefId(JSON.parse(sessionStorage.getItem('CREDENTIALS')!)).subscribe(resp => {
      console.log(resp);
      this.currentUser = resp[0];
    });
  }

  order() {
    if (this.payingInfo.controls['Paying'].value != '') {
      this.payingBy = this.payingInfo.controls['Paying'].value;
      localStorage.setItem("paying", JSON.stringify(this.payingBy));
      this.currentOrder = {
        address: localStorage.getItem('address')!,
        payment: localStorage.getItem('paying')!,
        statusID: "U9i783dfHde0z67VgXud",
        dateTime: formatDate(new Date(), 'yyyy.MM.dd.', 'en'),
        cart: localStorage.getItem('cartElements')!
      }
      this.orderSrvice.createOrder(this.currentOrder);
      this.currentUser.orderDocRef?.push(this.currentOrder.documentReference!);
      this.userService.updateUsers(this.currentUser);
      localStorage.clear();
      this.router.navigate(['/ordered']);
    } else {
      this.showAlertMessage = true;
    }
  }

}
