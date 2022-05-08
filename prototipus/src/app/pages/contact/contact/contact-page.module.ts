import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [ContactPageRoutingModule, SharedModule],
  providers: [],
  declarations: [ContactComponent],
})
export class ContactPageModule { }
