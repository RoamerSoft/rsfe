import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModelCanvasComponent } from './app-model-canvas.component';

const routes: Routes = [
  { path: '', component: AppModelCanvasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppModelCanvasRoutingModule { }
