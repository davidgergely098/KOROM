import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  imports: [CartPageRoutingModule, SharedModule],
  providers: [],
  declarations: [CartComponent],
})
export class CartPageModule { }
