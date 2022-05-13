import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebDealComponent } from './web-deal.component';
import { WdTestimonialsComponent } from './components/wd-testimonials/wd-testimonials.component';
import { WdBrandsComponent } from './components/wd-brands/wd-brands.component';
import { WdFaqComponent } from './components/wd-faq/wd-faq.component';
import { WdIconBoxesComponent } from './components/wd-icon-boxes/wd-icon-boxes.component';
import { WdInterruptionTextComponent } from './components/wd-interruption-text/wd-interruption-text.component';
import { WdLandingSliderComponent } from './components/wd-landing-slider/wd-landing-slider.component';
import { WdPricesComponent } from './components/wd-prices/wd-prices.component';
import { WdProblemComponent } from './components/wd-problem/wd-problem.component';
import { WdSolutionComponent } from './components/wd-solution/wd-solution.component';
import { TranslateModule } from '@ngx-translate/core';
import { WebDealRoutingModule } from './web-deal-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    WebDealComponent,
    WdTestimonialsComponent,
    WdSolutionComponent,
    WdProblemComponent,
    WdIconBoxesComponent,
    WdLandingSliderComponent,
    WdPricesComponent,
    WdFaqComponent,
    WdInterruptionTextComponent,
    WdBrandsComponent,
  ],
  imports: [CoreModule, CommonModule, TranslateModule, WebDealRoutingModule],
})
export class WebDealModule {
}
