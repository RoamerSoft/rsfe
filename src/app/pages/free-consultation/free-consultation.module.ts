import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { FreeConsultationRoutingModule } from './free-consultation-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FreeConsultationComponent } from './free-consultation.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ProblemComponent } from './components/problem/problem.component';
import { SolutionComponent } from './components/solution/solution.component';

@NgModule({
  declarations: [
    FreeConsultationComponent,
    ListHeaderComponent,
    ProblemComponent,
    SolutionComponent
  ],
  imports: [CoreModule, CommonModule, TranslateModule, SharedModule, FreeConsultationRoutingModule],
})
export class FreeConsultationModule {
}
