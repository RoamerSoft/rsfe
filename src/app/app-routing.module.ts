import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebDealPageComponent } from './pages/web-deal-page/web-deal-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'webdeals', component: WebDealPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
