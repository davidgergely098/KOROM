import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _firestore: AngularFirestore) { }

  getUsers(): Observable<Cart[]> {
    return this._firestore.collection<Cart>('Cart', ref => ref).valueChanges();
  }

  getUserByRefId(docRef: any) {
    return this._firestore.collection<Cart>('Cart', ref => ref.where('documentReference', '==', docRef)).valueChanges();
  }

  createUser(cart: Cart) {
    const key = this._firestore.createId();
    cart.documentReference = key;
    return new Promise<any>((_resolve, reject) => {
      this._firestore
        .collection('Cart')
        .doc(key)
        .set(cart)
        .then(
          res => { },
          err => reject(err)
        );
    });
  }

  updateUsers(cart: Cart) {
    return this._firestore.collection('Cart').doc(cart.documentReference).update(cart);
  }

  deleteUsers(cart: Cart) {
    return this._firestore.collection('Cart').doc(cart.documentReference).delete();
  }
}
