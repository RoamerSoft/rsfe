import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './deal.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DealRoutingModule } from './deal-routing.module';
import { CoreModule } from '../../core/core.module';
import { ServerOnlineComponent } from './components/server-online/server-online.component';


@NgModule({
  declarations: [DealComponent, ServerOnlineComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule,
    DealRoutingModule,
  ]
})
export class DealModule {
}
