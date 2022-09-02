import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from '../../core/services/translation-service/translation.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   * [3] = Image for link (og:image)
   */
  private metaDataTranslateKeys = [
    'Beheer en onderhoud',
    'Totaaloplossingen voor app- en serverbeheer',
    'Serverbeheer, Appbeheer, Onderhoud, Bas Gerritsen, RoamerSoft',
    'https://www.roamersoft.com/assets/images/roamersoft/Bas-Gerritsen.jpg'
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
  ) {
  }

  async ngOnInit() {
    await this.setTranslationAndMetaData();

    setTimeout(() => {
      this.loadPopper();
    }, 2000);
  }

  public loadPopper() {
    const dynamicScripts = [
      '/assets/js/popper.min.js' + `?t=${Date.now()}`,
    ];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      // tslint:disable-next-line: deprecation
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

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
            this.meta.updateTag({
              property: 'og:image',
              content: resAsJson[this.metaDataTranslateKeys[3]],
            });
            resolve();
          });
      });
    });
  }

}
