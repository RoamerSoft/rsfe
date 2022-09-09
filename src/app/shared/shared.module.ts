import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieBarComponent } from '../shared/components/cookie-bar/cookie-bar.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MemberCardComponent } from '../shared/components/member-card/member-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from '../pages/app-model-canvas/components/checkout/checkout.component';
import { MagnetComponent } from './components/magnet/magnet.component';
import { CoreModule } from '../core/core.module';
import { InfographicCheckoutComponent } from '../pages/home/components/infographic-checkout/infographic-checkout.component';
import { TypeFormComponent } from './components/type-form/type-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CookieBarComponent, NavBarComponent, FooterComponent, MemberCardComponent,
    CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent
  ],
  providers: [NgbActiveModal],
  imports: [CommonModule, TranslateModule, FormsModule, CoreModule],
  entryComponents: [CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent],
  exports: [CookieBarComponent, NavBarComponent, FooterComponent, MemberCardComponent,
    CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent],
})
export class SharedModule {
}
