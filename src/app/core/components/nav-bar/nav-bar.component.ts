import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation-service/translation.service';
import { UtilsService } from '../../services/utils-service/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public currentLang: string;

  public webDealPage = false;
  public homePage = true;

  constructor(
    private translationService: TranslationService,
    public route: ActivatedRoute,
    private utilService: UtilsService
  ) {}

  ngOnInit() {
    this.currentLang = this.translationService.getLang();

    const lastPartOfUrl = this.utilService.getLastPartOfUrl(location.href);

    if (lastPartOfUrl === 'webdeals') {
      this.webDealPage = true;
      this.homePage = false;
    }
  }

  public switchLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
  }
}
