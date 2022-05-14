import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';
import { PriceCard } from '../../core/entities/price-card/price-card';
import { WdCheckoutComponent } from './components/wd-checkout/wd-checkout.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-web-deal',
  templateUrl: './web-deal.component.html',
  styleUrls: ['./web-deal.component.scss'],
})
export class WebDealComponent implements OnInit {
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


  private createWebShopPlusDeal() {
    const webShopPlusDeal = new PriceCard('Webshop Plus Deal', 'De vol automatische webshop!', 5, 1295);
    webShopPlusDeal.addExtraListItems([
      'Betaalsysteem Integratie',
      'PostNL of DHL Verzending',
      'Leverancier Koppeling',
      'Boekhoudingspakket Koppeling',
    ]);

    return webShopPlusDeal;
  }

  public openCheckout() {
    setTimeout(() => {
      const modalRef = this.modalService.open(WdCheckoutComponent);
      modalRef.componentInstance.deal = this.createWebShopPlusDeal();
    }, 150);
  }
}
