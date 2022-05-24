import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewQuoteComponent } from './components/review-quote/review-quote.component';
import { AboutMeComponent } from './components/about-me/about-mecomponent';
import { CrossPlatformComponent } from './components/cross-platform/cross-platform.component';
import { WorkingMethodComponent } from './components/working-method/working-method.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    WorkingMethodComponent,
    GuaranteesComponent,
    CrossPlatformComponent,
    FaqComponent,
    TestimonialsComponent,
    ReviewQuoteComponent,
    AboutMeComponent,
  ],
  imports: [CoreModule, CommonModule, HomeRoutingModule, TranslateModule, FormsModule, SharedModule],
})
export class HomeModule {
}
