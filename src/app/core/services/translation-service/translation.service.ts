import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Translation } from '../../entities/translation/translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private api: string = environment.api;
  private defaultLanguage = 'nl';

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    @Optional()
    @Inject(REQUEST)
    private request: Request,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }

  private getTranslationFromServer(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`${this.api}/translations/${lang}`);
  }

  public getTranslationByKey(key: string[]) {
    return this.translate.get(key);
  }

  public getLang(): string {
    return this.defaultLanguage;
  }

  public async setTranslation() {
    const language = this.getLang();
    // Set NL or EN based on the request or EN for any other language
    if (['en', 'nl'].indexOf(language) > -1) {
      // Set the backend as source for the specific translation in json
      this.translate.setTranslation(language, await this.getTranslationFromServer(language).toPromise());
      // Set specific language
      this.translate.setDefaultLang(language);
    } else {
      // Set the backend as source for the English translation in json
      this.translate.setTranslation('en', await this.getTranslationFromServer('en').toPromise());
      // Set the English language
      this.translate.setDefaultLang('en');
    }
  }

  public async switchLanguage(lang: string) {
    // Set the backend as source for the specific translation in json
    this.translate.setTranslation(lang, await this.getTranslationFromServer(lang).toPromise());
    // Use the specific language translation
    this.translate.use(lang);
  }

  public getTranslation(key: string): Observable<any> {
    return this.translate.get(key);
  }
}
