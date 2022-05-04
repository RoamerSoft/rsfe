import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   */
  private metaDataTranslateKeys = [
    'RoamerSoft | Web en app ontwikkeling',
    'Mobiele app laten ontwikkelen die op zowel Android als Apple iOS draait? Full stack software developer nodig voor de ontwikkeling van je webapplicatie op maat?',
    'App ontwikkeling, Web ontwikkeling, RoamerSoft, Bas Gerritsen, Full stack software developer, Cross platform, Hybride app, Mobiele app, Webapplicatie',
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService
  ) {
  }

  async ngOnInit() {
    await this.setTranslationAndMetaData();
  }

  public async setTranslationAndMetaData() {
    return new Promise((resolve) => {
      this.translationService.setTranslation().then(() => {
        this.translationService
          .getTranslationByKey(this.metaDataTranslateKeys)
          .subscribe((resAsJson) => {
            this.title.setTitle(resAsJson[this.metaDataTranslateKeys[0]]);
            this.meta.updateTag({
              name: 'description',
              content: resAsJson[this.metaDataTranslateKeys[1]],
            });
            this.meta.updateTag({
              name: 'keywords',
              content: resAsJson[this.metaDataTranslateKeys[2]],
            });
            resolve();
          });
      });
    });
  }
}
