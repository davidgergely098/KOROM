import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [ProfilePageRoutingModule, SharedModule],
  providers: [],
  declarations: [ProfileComponent],
})
export class ProfliePageModule { }
