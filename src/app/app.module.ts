import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './pages/home/home.module';
import { CoreModule } from './core/core.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    CoreModule,
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
    NgbModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcHNPgUAAAAAH60HKHI8UKLkh0ogMnhxSWHFGL4' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
