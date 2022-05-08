import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _firestore: AngularFirestore) { }

  getOrders(): Observable<Order[]> {
    return this._firestore.collection<Order>('order', ref => ref).valueChanges();
  }

  getOrderByRefId(docRef: any){
    return this._firestore.collection<Order>('order', ref => ref.where('documentReference', '==', docRef)).valueChanges();
  }

  createOrder(order: Order) {
    const key = this._firestore.createId();
    order.documentReference = key;
    return new Promise<any>((_resolve, reject) => {
      this._firestore
        .collection('order')
        .doc(key)
        .set(order)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }

  updateOrders(order: Order) {
    return this._firestore.collection('orders').doc(order.documentReference).update(order);
  }

  deleteOrders(order: Order) {
    return this._firestore.collection('orders').doc(order.documentReference).delete();
  }

}
