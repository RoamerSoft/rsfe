import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { CoreModule } from 'src/app/core/core.module';
import { BreakerComponent } from './components/breaker/breaker.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewQuoteComponent } from './components/review-quote/review-quote.component';
import { AboutMeComponent } from './components/about-me/about-mecomponent';
import { EBookComponent } from './components/e-book/e-book.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HeaderComponent,
    ContactComponent,
    ClientsComponent,
    AboutComponent,
    TechnologiesComponent,
    PortfolioComponent,
    BreakerComponent,
    ServicesComponent,
    WelcomeComponent,
    FaqComponent,
    TestimonialsComponent,
    ReviewQuoteComponent,
    AboutMeComponent,
    EBookComponent
  ],
  imports: [CoreModule, CommonModule, HomeRoutingModule, TranslateModule, FormsModule],
})
export class HomeModule {
}
