import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PayingPageRoutingModule } from './paying-page-routing.module';
import { PayingComponent } from './paying.component';


@NgModule({
  imports: [PayingPageRoutingModule, SharedModule],
  providers: [],
  declarations: [PayingComponent],
})
export class PayingPageModule { }
