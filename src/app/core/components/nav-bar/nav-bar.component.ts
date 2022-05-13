import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation-service/translation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() conversionMode: boolean;
  public currentLang: string;

  constructor(
    private translationService: TranslationService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.currentLang = this.translationService.getLang();
  }

  public switchLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
  }
}
