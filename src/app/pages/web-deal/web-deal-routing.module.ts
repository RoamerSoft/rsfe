import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebDealComponent } from './web-deal.component';

const routes: Routes = [
  { path: '', component: WebDealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebDealRoutingModule { }
