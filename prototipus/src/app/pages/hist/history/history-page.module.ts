import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HistoryPageRoutingModule } from './history-page-routing.module';
import { HistoryComponent } from './history.component';

@NgModule({
  imports: [HistoryPageRoutingModule, SharedModule],
  providers: [],
  declarations: [HistoryComponent],
})
export class HistoryPageModule { }
