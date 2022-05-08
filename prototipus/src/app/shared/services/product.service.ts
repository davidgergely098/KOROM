import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _firestore: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    return this._firestore.collection<Product>('Products', ref => ref).valueChanges();
  }

  createProduct(product: Product) {
    const key = this._firestore.createId();
    product.documentReference = key;
    return new Promise<any>((_resolve, reject) => {
      this._firestore
        .collection('Products')
        .doc(key)
        .set(product)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }

  updateProducts(product: Product) {
    return this._firestore.collection('Products').doc(product.documentReference).update(product);
  }

  deleteProducts(product: Product) {
    return this._firestore.collection('Products').doc(product.documentReference).delete();
  }
}
