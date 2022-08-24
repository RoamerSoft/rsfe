import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeConsultationComponent } from './free-consultation.component';

const routes: Routes = [
  { path: '', component: FreeConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeConsultationRoutingModule {
}
