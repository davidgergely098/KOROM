import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomePageRoutingModule, SharedModule],
  providers: [],
  declarations: [HomeComponent],
})
export class HomePageModule { }
