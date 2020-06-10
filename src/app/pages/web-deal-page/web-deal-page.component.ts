import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslationService } from 'src/app/services/translation-service/translation.service';

@Component({
  selector: 'app-web-deal-page',
  templateUrl: './web-deal-page.component.html',
  styleUrls: ['./web-deal-page.component.scss'],
})
export class WebDealPageComponent implements OnInit {
  public loadAPI: Promise<any>;

  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   */
  private metaDataTranslateKeys = [
    'Webshop of Website laten maken? | RoamerSoft WebDeals!',
    'Voorkom een slecht design, onvindbaarheid, belabberde security en niet behaalde doelen! Kies de totaaloplossing speciaal voor de startende ondernemer!',
    'Website, Webshop, WebDeals, Totaaloplossing, Startende, Ondernemer',
  ];

  constructor(private title: Title, private meta: Meta, private translationService: TranslationService) {}

  async ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

    await this.setTranslationAndMetaData();
  }

  public async setTranslationAndMetaData() {
    return new Promise((resolve) => {
      this.translationService.setTranslation().then(() => {
        this.translationService.getTranslationByKey(this.metaDataTranslateKeys).subscribe((resAsJson) => {
          this.title.setTitle(resAsJson[this.metaDataTranslateKeys[0]]);
          this.meta.updateTag({ name: 'description', content: resAsJson[this.metaDataTranslateKeys[1]] });
          this.meta.updateTag({ name: 'keywords', content: resAsJson[this.metaDataTranslateKeys[2]] });
          resolve();
        });
      });
    });
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = ['/assets/js/jquery.js', '/assets/js/popper.min.js', '/assets/js/plugins.js', '/assets/js/functions.js'];

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
  }
}
