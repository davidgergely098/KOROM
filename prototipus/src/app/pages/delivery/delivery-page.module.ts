import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DeliveryPageRoutingModule } from './delivery-page-routing.module';
import { DeliveryComponent } from './delivery.component';


@NgModule({
  imports: [DeliveryPageRoutingModule, SharedModule],
  providers: [],
  declarations: [DeliveryComponent],
})
export class DeliveryPageModule { }
