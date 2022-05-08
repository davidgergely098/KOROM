import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-from-cart',
  templateUrl: './delivery-from-cart.component.html',
  styleUrls: ['./delivery-from-cart.component.scss']
})
export class DeliveryFromCartComponent implements OnInit {

  showAlertMessage: boolean = false;
  address!: string;

  deliveryInfo: FormGroup = this._fb.group({
    ZipCode: ['', []],
    City: ['', []],
    Street: ['', []],
    Number: ['', []],
    FloorDoor: ['', []],
  });

  constructor(private _fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (
      this.deliveryInfo.controls['ZipCode'].value != '' &&
      this.deliveryInfo.controls['City'].value != '' &&
      this.deliveryInfo.controls['Street'].value != '' &&
      this.deliveryInfo.controls['Number'].value !== '' &&
      this.deliveryInfo.controls['FloorDoor'].value !== ''
    ) {
      this.address =
        this.deliveryInfo.controls['ZipCode'].value + ' ' +
        this.deliveryInfo.controls['City'].value + ', ' +
        this.deliveryInfo.controls['Street'].value + ' ' +
        this.deliveryInfo.controls['Number'].value + ', Emelet, ajtó: ' +
        this.deliveryInfo.controls['FloorDoor'].value;
      localStorage.setItem("address", JSON.stringify(this.address));
      this.router.navigate(['/paying']);
    } else {
      this.showAlertMessage = true;
    }
  }

}
