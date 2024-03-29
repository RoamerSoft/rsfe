import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslationService} from 'src/app/core/services/translation-service/translation.service';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-web-deal',
  templateUrl: './app-model-canvas.component.html',
  styleUrls: ['./app-model-canvas.component.scss'],
})
export class AppModelCanvasComponent implements OnInit, AfterViewInit {
  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   * [3] = Image for link (og:image)
   */
  private metaDataTranslateKeys = [
    'App idee, maar waar te beginnen?',
    'Werk je app idee uit met het App Model Canvas!',
    'App Model Canvas, App idee, E-book, Bas Gerritsen, RoamerSoft',
    'https://www.roamersoft.com/assets/images/ebook/App_idee_maar_waar_te_beginnen_RoamerSoft.jpg'
  ];

  public reminderShowed = true;
  public reminderStorageKey = 'reminderShowed';

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    private modalService: NgbModal
  ) {
  }

  async ngOnInit() {

    // Wait 5 seconds before showing reminder
    setTimeout(() => {
      // Check if reminder is showed
      const reminderStorage = sessionStorage.getItem(this.reminderStorageKey);
      this.reminderShowed = !!reminderStorage;
    }, 5000);


    await this.setTranslationAndMetaData();
  }

  ngAfterViewInit(): void {
    this.loadScript();
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

  public openCheckout() {
    setTimeout(() => {
      this.modalService.open(CheckoutComponent);
    }, 150);
  }

  public showReminder(): void {
    if (!this.reminderShowed) {
      // Set reminder as showed
      this.reminderShowed = true
      // Save reminder as showed
      sessionStorage.setItem(this.reminderStorageKey, this.reminderStorageKey);
      this.modalService.open(CheckoutComponent);
    }
  }
}
