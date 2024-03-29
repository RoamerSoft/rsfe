import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieBarComponent} from '../shared/components/cookie-bar/cookie-bar.component';
import {NavBarComponent} from '../shared/components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

import {CheckoutComponent} from '../pages/app-model-canvas/components/checkout/checkout.component';
import {MagnetComponent} from './components/magnet/magnet.component';
import {CoreModule} from '../core/core.module';
import {
  InfographicCheckoutComponent
} from '../pages/home/components/infographic-checkout/infographic-checkout.component';
import {TypeFormComponent} from './components/type-form/type-form.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {InterruptionTextComponent} from './components/interruption-text/interruption-text.component';
import {BgaModalComponent} from "./components/bga-modal/bga-modal.component";
import {DiscountMagnetComponent} from "./components/discount-magnet/discount-magnet.component";

@NgModule({
  declarations: [
    CookieBarComponent, NavBarComponent, FooterComponent,
    CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent,
    InterruptionTextComponent, BgaModalComponent, DiscountMagnetComponent
  ],
  providers: [NgbActiveModal],
  imports: [CommonModule, TranslateModule, FormsModule, CoreModule],
  entryComponents: [CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent, BgaModalComponent, DiscountMagnetComponent],
  exports: [CookieBarComponent, NavBarComponent, FooterComponent, DiscountMagnetComponent,
    CheckoutComponent, MagnetComponent, InfographicCheckoutComponent, TypeFormComponent, InterruptionTextComponent, BgaModalComponent],
})
export class SharedModule {
}
