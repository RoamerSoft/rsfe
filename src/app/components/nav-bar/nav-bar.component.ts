import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation-service/translation.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public currentLang: string;

  public webDealPage = false;
  public homePage = true;

  constructor(private translationService: TranslationService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.currentLang = this.translationService.getLang();

    if (this.route.snapshot.url[0].path === 'webdeals') {
      this.webDealPage = true;
      this.homePage = false;
    }
  }

  public switchLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
  }
}
