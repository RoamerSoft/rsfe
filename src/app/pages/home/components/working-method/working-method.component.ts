import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation-service/translation.service';

@Component({
  selector: 'app-working-method',
  templateUrl: './working-method.component.html',
  styleUrls: ['./working-method.component.scss']
})
export class WorkingMethodComponent implements OnInit {
  public currentLang: string;

  @Input() showLeadMagnetButton: boolean;
  @Output() buttonClicked = new EventEmitter<void>();

  constructor(private translationService: TranslationService) {
  }

  ngOnInit() {
    this.currentLang = this.translationService.getLang();
  }

}
