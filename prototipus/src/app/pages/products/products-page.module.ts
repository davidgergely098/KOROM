import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  imports: [ProductsPageRoutingModule, SharedModule],
  providers: [],
  declarations: [ProductsComponent],
})
export class ProductsPageModule { }
