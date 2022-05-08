import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [AdminPageRoutingModule, SharedModule],
  providers: [],
  declarations: [AdminComponent],
})
export class AdminPageModule { }
