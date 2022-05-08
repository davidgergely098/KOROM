import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { OrderedPageRoutingModule } from './ordered-page-routing.module';
import { OrderedComponent } from './ordered.component';

@NgModule({
  imports: [OrderedPageRoutingModule, SharedModule],
  providers: [],
  declarations: [OrderedComponent],
})
export class OrderedPageModule { }
