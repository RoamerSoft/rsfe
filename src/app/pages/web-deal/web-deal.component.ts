import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';

@Component({
  selector: 'app-web-deal',
  templateUrl: './web-deal.component.html',
  styleUrls: ['./web-deal.component.scss'],
})
export class WebDealComponent implements OnInit {

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
}
