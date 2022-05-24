import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieBarComponent } from '../shared/components/cookie-bar/cookie-bar.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MemberCardComponent } from '../shared/components/member-card/member-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from '../pages/app-model-canvas/components/checkout/checkout.component';

@NgModule({
  declarations: [
    CookieBarComponent, NavBarComponent, FooterComponent, MemberCardComponent, CheckoutComponent,
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  entryComponents: [CheckoutComponent],
  exports: [CookieBarComponent, NavBarComponent, FooterComponent, MemberCardComponent, CheckoutComponent],
})
export class SharedModule {
}
