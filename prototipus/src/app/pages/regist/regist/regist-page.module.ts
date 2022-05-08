import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RegistPageRoutingModule } from './regist-page-routing.module';
import { RegistComponent } from './regist.component';


@NgModule({
  imports: [RegistPageRoutingModule, SharedModule],
  providers: [],
  declarations: [RegistComponent],
})
export class RegistPageModule { }
