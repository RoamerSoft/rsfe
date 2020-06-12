import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PriceCard } from 'src/app/entities/price-card/price-card';
import { ContactForm } from 'src/app/models/contact-form/contact-form';

@Component({
  selector: 'app-wd-checkout',
  templateUrl: './wd-checkout.component.html',
  styleUrls: ['./wd-checkout.component.scss'],
})
export class WdCheckoutComponent implements OnInit {
  // Comes from parent
  public deal: PriceCard;

  public contactForm: ContactForm;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.contactForm = new ContactForm();
  }

  public getNameOnInput(event) {
    this.contactForm.name = event.target.value;
  }

  public isEven(n: number): boolean {
    return n % 2 === 0;
  }
}
