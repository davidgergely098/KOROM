import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Product } from 'src/app/shared/models/product.model';
import { User } from 'src/app/shared/models/user.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  currentUser!: User;
  currentOrder?: Order;
  currentOrderProducts?: Product[] = [];
  amount: number = 0;

  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.userService.getUserByRefId(JSON.parse(sessionStorage.getItem('CREDENTIALS')!)).subscribe(resp => {
      this.currentUser = resp[0];
      console.log(this.currentUser)
      this.currentUser.orderDocRef?.map(res => {
        this.orderService.getOrderByRefId(res).subscribe(orders => {
          orders.map(order => {
            this.currentOrder = order;
            const productArray: Product[] = JSON.parse(order.cart);
            productArray.map(prod => this.currentOrderProducts?.push(prod));
          });
        });
      });
    });


  }

}
