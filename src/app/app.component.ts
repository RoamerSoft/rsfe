import { Component, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';
import { TranslationService } from './services/translation-service/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'roamersoft';

  param = { value: '🙋🏻‍♂️' };

  constructor(
    private translate: TranslateService,
    @Optional()
    @Inject(REQUEST)
    private request: Request,
    @Inject(PLATFORM_ID) private platformId: any,
    private translationService: TranslationService
  ) {}

  public async ngOnInit() {
    const language = this.getLang();
    // Set NL or EN based on the request or EN for any other language
    if (['en', 'nl'].indexOf(language) > -1) {
      // Set the backend as source for the specific translation in json
      this.translate.setTranslation(
        language,
        await this.translationService.getTranslation(language).toPromise()
      );
      // Set specific language
      this.translate.setDefaultLang(language);
    } else {
      // Set the backend as source for the English translation in json
      this.translate.setTranslation(
        'en',
        await this.translationService.getTranslation('en').toPromise()
      );
      // Set the English language
      this.translate.setDefaultLang('en');
    }
  }

  public getLang(): string {
    let lang: string;
    if (isPlatformBrowser(this.platformId)) {
      // Gets browser language and sets it as default
      lang = this.translate.getBrowserLang();
    } else {
      // Get language request on server side from header and sets it as default (Google web crawlers)
      lang = (this.request.headers['accept-language'] || '').substring(0, 2);
    }
    return lang;
  }

  public async switchLanguage(lang: string) {
    // Set the backend as source for the specific translation in json
    this.translate.setTranslation(
      lang,
      await this.translationService.getTranslation(lang).toPromise()
    );
    // Use the specific language translation
    this.translate.use(lang);
  }
}
