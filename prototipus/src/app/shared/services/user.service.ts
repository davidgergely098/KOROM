import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _firestore: AngularFirestore) { }

  getUsers(): Observable<User[]> {
    return this._firestore.collection<User>('users', ref => ref).valueChanges();
  }

  getUserByRefId(docRef: any){
    return this._firestore.collection<User>('users', ref => ref.where('documentReference', '==', docRef)).valueChanges();
  }

  createUser(user: User) {
    const key = this._firestore.createId();
    user.documentReference = key;
    return new Promise<any>((_resolve, reject) => {
      this._firestore
        .collection('users')
        .doc(key)
        .set(user)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }

  updateUsers(user: User) {
    return this._firestore.collection('users').doc(user.documentReference).update(user);
  }

  deleteUsers(user: User) {
    return this._firestore.collection('users').doc(user.documentReference).delete();
  }
}
