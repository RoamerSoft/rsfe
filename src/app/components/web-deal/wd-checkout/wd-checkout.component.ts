import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wd-checkout',
  templateUrl: './wd-checkout.component.html',
  styleUrls: ['./wd-checkout.component.scss'],
})
export class WdCheckoutComponent implements OnInit {
  public name: string;
  public deal: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onInput(event) {
    this.name = event.target.value;
  }
}
