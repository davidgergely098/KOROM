import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [AboutPageRoutingModule, SharedModule],
  providers: [],
  declarations: [AboutComponent],
})
export class AboutPageModule { }
