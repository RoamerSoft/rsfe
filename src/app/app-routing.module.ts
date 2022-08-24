import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'app-idee-maar-waar-te-beginnen',
    loadChildren: () => import('./pages/app-model-canvas/app-model-canvas.module').then((m) => m.AppModelCanvasModule),
  },
  {
    path: 'beheer-en-onderhoud',
    loadChildren: () => import('./pages/deal/deal.module').then((m) => m.DealModule),
  },
  {
    path: 'gratis-adviesgesprek',
    loadChildren: () => import('./pages/free-consultation/free-consultation.module').then((m) => m.FreeConsultationModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
