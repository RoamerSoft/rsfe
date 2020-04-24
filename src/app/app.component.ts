import { Component, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  public ngOnInit(): void {
    const language = this.getLang();
    // Set NL or EN based on the request or EN for any other language.
    if (['en', 'nl'].indexOf(language) > -1) {
      this.translate.setDefaultLang(language);
    } else {
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

  public switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
