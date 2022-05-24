import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('openClose', [
      state('open', style({
        right: '0',
      })),
      state('closed', style({
        right: '-375px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showMagnet = false;

  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   */
  private metaDataTranslateKeys = [
    'Web en app ontwikkeling',
    'Op maat gemaakte webapplicaties en cross-platform mobiele apps die je helpen je doelen te bereiken.',
    'App ontwikkeling, Web ontwikkeling, RoamerSoft, Bas Gerritsen, Full stack software developer, Cross platform, Mobiele app, Webapplicatie',
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
      this.showMagnet = true;

    }, 1000);
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
