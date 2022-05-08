import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderedComponent } from './ordered.component';

const routes: Routes = [
  {
    path: '',
    component: OrderedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderedPageRoutingModule {}
