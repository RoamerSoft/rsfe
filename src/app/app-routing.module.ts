import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebDealComponent } from './pages/web-deal/web-deal.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: 'webdeals',
  loadChildren: () => import('./pages/web-deal/web-deal.module').then(m => m.WebDealModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
