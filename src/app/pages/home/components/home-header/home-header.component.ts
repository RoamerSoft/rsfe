import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/core/services/translation-service/translation.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  public browserLanguage: string;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.browserLanguage = this.translationService.getLang();
  }
}
