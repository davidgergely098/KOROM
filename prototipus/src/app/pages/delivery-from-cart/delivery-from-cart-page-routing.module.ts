import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryFromCartComponent } from './delivery-from-cart.component';


const routes: Routes = [
  {
    path: '',
    component: DeliveryFromCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryFromCartPageRoutingModule {}
