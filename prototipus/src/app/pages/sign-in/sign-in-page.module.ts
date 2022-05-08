import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  imports: [SignInPageRoutingModule, SharedModule],
  providers: [],
  declarations: [SignInComponent],
})
export class SignInPageModule { }
