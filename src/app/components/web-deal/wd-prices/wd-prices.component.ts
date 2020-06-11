import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { WdCheckoutComponent } from '../wd-checkout/wd-checkout.component';

@Component({
  selector: 'app-wd-prices',
  templateUrl: './wd-prices.component.html',
  styleUrls: ['./wd-prices.component.scss'],
})
export class WdPricesComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(WdCheckoutComponent, { size: 'xl' });
    modalRef.componentInstance.deal = 'Webshop Plus Deal';
  }

  ngOnInit() {}
}
