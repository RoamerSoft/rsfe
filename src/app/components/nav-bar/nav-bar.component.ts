import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation-service/translation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public currentLang: string;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.currentLang = this.translationService.getLang();
  }

  public switchLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
  }
}
