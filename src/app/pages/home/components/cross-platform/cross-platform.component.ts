import { Component, Input, OnInit } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation-service/translation.service';

@Component({
  selector: 'app-cross-platform',
  templateUrl: './cross-platform.component.html',
  styleUrls: ['./cross-platform.component.scss']
})
export class CrossPlatformComponent implements OnInit {
  @Input() currentLang: string;

  constructor() {
  }

  ngOnInit() {
  }

}
