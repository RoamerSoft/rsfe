import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WdCheckoutComponent } from '../wd-checkout/wd-checkout.component';

@Component({
  selector: 'app-wd-prices',
  templateUrl: './wd-prices.component.html',
  styleUrls: ['./wd-prices.component.scss'],
})
export class WdPricesComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openCheckout(deal: string) {
    setTimeout(() => {
      const modalRef = this.modalService.open(WdCheckoutComponent, { size: 'xl' });
      modalRef.componentInstance.deal = deal;
    }, 150);
  }
}
