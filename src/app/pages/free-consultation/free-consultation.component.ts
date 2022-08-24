import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';
import * as typeformEmbed from '@typeform/embed';
import { ScrollService } from '../../core/services/scroll-service/scroll.service';

@Component({
  selector: 'app-free-consultation',
  templateUrl: './free-consultation.component.html',
  styleUrls: ['./free-consultation.component.scss'],
})
export class FreeConsultationComponent implements OnInit, AfterViewInit {
  public loadAPI: Promise<any>;


  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   */
  private metaDataTranslateKeys = [
    'Adviesgesprek plannen',
    'Plan hier jou gratis adviesgesprek!',
    'Adviesgesprek, App ontwikkeling, Bas Gerritsen, RoamerSoft',
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    private scrollService: ScrollService
  ) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes('loader')
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = [
        '/assets/js/jquery.js',
        '/assets/js/popper.min.js',
        '/assets/js/plugins.js',
        '/assets/js/functions.js',
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
  }

  async ngOnInit() {
    await this.setTranslationAndMetaData();
    this.scrollService.disableScrolling();
  }

  ngAfterViewInit(): void {
    // Get screen height
    const height = window.innerHeight - 80;
    // Show form
    typeformEmbed.createWidget('PBlRwu4k', {
      container: document.querySelector('#formContainer'),
      height,
      hideFooter: true,
      hideHeaders: true,
    });
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
