"use strict";(self.webpackChunkwebshop=self.webpackChunkwebshop||[]).push([[592],{3994:(l,n,o)=>{o.d(n,{p:()=>u});var c=o(5312),i=o(3700);let u=(()=>{class r{constructor(e){this._firestore=e}getOrders(){return this._firestore.collection("order",e=>e).valueChanges()}getOrderByRefId(e){return this._firestore.collection("order",t=>t.where("documentReference","==",e)).valueChanges()}createOrder(e){const t=this._firestore.createId();return e.documentReference=t,new Promise((a,_)=>{this._firestore.collection("order").doc(t).set(e).then(s=>{},s=>_(s))})}updateOrders(e){return this._firestore.collection("orders").doc(e.documentReference).update(e)}deleteOrders(e){return this._firestore.collection("orders").doc(e.documentReference).delete()}}return r.\u0275fac=function(e){return new(e||r)(c.LFG(i.ST))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7296:(l,n,o)=>{o.d(n,{M:()=>u});var c=o(5312),i=o(3700);let u=(()=>{class r{constructor(e){this._firestore=e}getProducts(){return this._firestore.collection("Products",e=>e).valueChanges()}createProduct(e){const t=this._firestore.createId();return e.documentReference=t,new Promise((a,_)=>{this._firestore.collection("Products").doc(t).set(e).then(s=>{},s=>_(s))})}updateProducts(e){return this._firestore.collection("Products").doc(e.documentReference).update(e)}deleteProducts(e){return this._firestore.collection("Products").doc(e.documentReference).delete()}}return r.\u0275fac=function(e){return new(e||r)(c.LFG(i.ST))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},3570:(l,n,o)=>{o.d(n,{K:()=>u});var c=o(5312),i=o(3700);let u=(()=>{class r{constructor(e){this._firestore=e}getUsers(){return this._firestore.collection("users",e=>e).valueChanges()}getUserByRefId(e){return this._firestore.collection("users",t=>t.where("documentReference","==",e)).valueChanges()}createUser(e){const t=this._firestore.createId();return e.documentReference=t,new Promise((a,_)=>{this._firestore.collection("users").doc(t).set(e).then(s=>{},s=>_(s))})}updateUsers(e){return this._firestore.collection("users").doc(e.documentReference).update(e)}deleteUsers(e){return this._firestore.collection("users").doc(e.documentReference).delete()}}return r.\u0275fac=function(e){return new(e||r)(c.LFG(i.ST))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);