import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public loadAPI: Promise<any>;

  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   */
  private metaDataTranslateKeys = [
    'RoamerSoft | Web and App Development',
    'Mobile App Development for Android and Apple iOS. Advanced Web Applications, WordPress Websites and Web Shops. Remotely build by a Full-Stack Software Developer.',
    'RoamerSoft, Bas Gerritsen, App Development, Web Development, WordPress Development, Websites, Web Shop, Remote, Full-Stack, Software, Developer',
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
