import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { readFileSync } from 'fs';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Reads the browser translation files at the server side and returns the output.
 */
export function universalLoader(): TranslateLoader {
  return {
    getTranslation: (lang: string) => {
      return Observable.create((observer: Observer<any>) => {
        observer.next(
          JSON.parse(
            readFileSync(`./dist/browser/assets/i18n/${lang}.json`, 'utf8')
          )
        );
        observer.complete();
      });
    },
  } as TranslateLoader;
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    // TranslateHttpLoader loads translations from "./dist/browser/assets/i18n/[lang].json"
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: universalLoader },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
