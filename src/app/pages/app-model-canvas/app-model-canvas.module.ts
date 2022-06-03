import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModelCanvasComponent } from './app-model-canvas.component';
import { InterruptionTextComponent } from './components/interruption-text/interruption-text.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ProblemComponent } from './components/problem/problem.component';
import { SolutionComponent } from './components/solution/solution.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppModelCanvasRoutingModule } from './app-model-canvas-routing.module';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AppModelCanvasComponent,
    SolutionComponent,
    ProblemComponent,
    ListHeaderComponent,
    InterruptionTextComponent,
  ],
  imports: [CoreModule, CommonModule, TranslateModule, SharedModule, AppModelCanvasRoutingModule],
})
export class AppModelCanvasModule {
}
