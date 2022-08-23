import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as typeformEmbed from '@typeform/embed';

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
    'App idee, maar waar te beginnen?',
    'Werk je app idee uit met het App Model Canvas!',
    'App Model Canvas, App idee, E-book, Bas Gerritsen, RoamerSoft',
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    private modalService: NgbModal
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
  }

  ngAfterViewInit(): void {
    const height = screen.height - 286;
    typeformEmbed.createWidget('PBlRwu4k', { container: document.querySelector('#formContainer'), height });
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

  public openCheckout() {
    setTimeout(() => {
      alert('Hi');
      // this.modalService.open(CheckoutComponent);
    }, 150);
  }
}
