import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { MissionComponent } from './components/mission/mission.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ClientsComponent } from './components/clients/clients.component';
import { WorkingMethodComponent } from './components/working-method/working-method.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DreamComponent } from './components/dream/dream.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { CookieBarComponent } from './components/cookie-bar/cookie-bar.component';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { WebDealPageComponent } from './pages/web-deal-page/web-deal-page.component';
import { WdTestimonialsComponent } from './components/web-deal/wd-testimonials/wd-testimonials.component';
import { WdSolutionComponent } from './components/web-deal/wd-solution/wd-solution.component';
import { WdProblemComponent } from './components/web-deal/wd-problem/wd-problem.component';
import { WdIconBoxesComponent } from './components/web-deal/wd-icon-boxes/wd-icon-boxes.component';
import { WdLandingSliderComponent } from './components/web-deal/wd-landing-slider/wd-landing-slider.component';
import { WdPricesComponent } from './components/web-deal/wd-prices/wd-prices.component';
import { WdFaqComponent } from './components/web-deal/wd-faq/wd-faq.component';
import { WdInterruptionTextComponent } from './components/web-deal/wd-interruption-text/wd-interruption-text.component';
import { WdBrandsComponent } from './components/web-deal/wd-brands/wd-brands.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeHeaderComponent,
    NavBarComponent,
    WelcomeComponent,
    ServicesComponent,
    FooterComponent,
    MissionComponent,
    PromiseComponent,
    ClientsComponent,
    WorkingMethodComponent,
    PortfolioComponent,
    DreamComponent,
    MemberCardComponent,
    CookieBarComponent,
    WebDealPageComponent,
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
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaV3Module,
    // The forRoot static method is a convention that provides and configures services at the same time
    // This method allows configuring the TranslateModule by specifying a loader, a parser and/or a missing translations handler
    // Only call this method in the root module (AppModule).
    TranslateModule.forRoot({
      loader: {
        // TranslateHttpLoader loads translations from "/assets/i18n/[lang].json" by default
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcHNPgUAAAAAH60HKHI8UKLkh0ogMnhxSWHFGL4' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
