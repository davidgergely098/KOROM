import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DeliveryFromCartPageRoutingModule } from './delivery-from-cart-page-routing.module';
import { DeliveryFromCartComponent } from './delivery-from-cart.component';


@NgModule({
  imports: [DeliveryFromCartPageRoutingModule, SharedModule],
  providers: [],
  declarations: [DeliveryFromCartComponent],
})
export class DeliveryFromCartPageModule { }
