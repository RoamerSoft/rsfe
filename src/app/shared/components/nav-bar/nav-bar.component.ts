import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../../core/services/translation-service/translation.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() conversionMode: boolean;
  public currentLang: string;
  @Input() showScrollToTop = true;

  public enableEbook = environment.enableEbook;
  public showEbookItem: boolean;
  @Output() eBookStatusChanged = new EventEmitter<boolean>();

  constructor(
    private translationService: TranslationService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.currentLang = this.translationService.getLang();
    this.showEbookItem = this.currentLang === 'nl' ? this.enableEbook : false;
  }

  public switchLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.currentLang = lang;
    this.showEbookItem = lang === 'nl' && this.enableEbook;
    this.eBookStatusChanged.emit(this.showEbookItem);
  }
}
