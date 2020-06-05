import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebdealPageComponent } from './pages/webdeal-page/webdeal-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'webdeal', component: WebdealPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
