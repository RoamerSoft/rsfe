import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieBarComponent } from './components/cookie-bar/cookie-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from './services/utils-service/utils.service';
import { ContactForm } from './models/contact-form/contact-form';
import { TranslationService } from './services/translation-service/translation.service';
import { ShowStarsPipe } from './pipes/show-stars/show-stars.pipe';
import { WdCheckoutComponent } from '../pages/web-deal/components/wd-checkout/wd-checkout.component';

@NgModule({
  declarations: [
    CookieBarComponent,
    NavBarComponent,
    FooterComponent,
    MemberCardComponent,
    ShowStarsPipe,
    WdCheckoutComponent
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  providers: [UtilsService, ContactForm, TranslationService],
  entryComponents: [WdCheckoutComponent],
  exports: [CookieBarComponent, NavBarComponent, FooterComponent, MemberCardComponent, ShowStarsPipe, WdCheckoutComponent],
})
export class CoreModule {
}
