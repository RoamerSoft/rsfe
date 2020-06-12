import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WdCheckoutComponent } from '../wd-checkout/wd-checkout.component';
import { PriceCard } from 'src/app/entities/price-card/price-card';

@Component({
  selector: 'app-wd-prices',
  templateUrl: './wd-prices.component.html',
  styleUrls: ['./wd-prices.component.scss'],
})
export class WdPricesComponent implements OnInit {
  public websiteDeal: PriceCard;
  public webShopDeal: PriceCard;
  public webShopPlusDeal: PriceCard;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.createWebsiteDeal();
    this.createWebShopDeal();
    this.createWebShopPlusDeal();
  }

  private createWebsiteDeal() {
    this.websiteDeal = new PriceCard('Website Deal', 'De website die je doelen realiseert!', 3, 695);
  }

  private createWebShopDeal() {
    this.webShopDeal = new PriceCard('Webshop Deal', 'De perfecte starters webshop!', 4, 995);
    this.webShopDeal.addExtraListItems(['Betaalsysteem Integratie', 'PostNL of DHL Verzending']);
  }

  private createWebShopPlusDeal() {
    this.webShopPlusDeal = new PriceCard('Webshop Plus Deal', 'De vol automatische webshop!', 5, 1295);
    this.webShopPlusDeal.addExtraListItems([
      'Betaalsysteem Integratie',
      'PostNL of DHL Verzending',
      'Leverancier Koppeling',
      'Boekhoudingspakket Koppeling',
    ]);
  }

  openCheckout(deal: PriceCard) {
    setTimeout(() => {
      const modalRef = this.modalService.open(WdCheckoutComponent, { size: 'xl' });
      modalRef.componentInstance.deal = deal;
    }, 150);
  }
}
