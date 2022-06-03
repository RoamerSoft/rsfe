import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from './services/utils-service/utils.service';
import { TranslationService } from './services/translation-service/translation.service';
import { ShowStarsPipe } from './pipes/show-stars/show-stars.pipe';

@NgModule({
  declarations: [
    ShowStarsPipe
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  providers: [UtilsService, TranslationService],
  exports: [ShowStarsPipe],
})
export class CoreModule {
}
