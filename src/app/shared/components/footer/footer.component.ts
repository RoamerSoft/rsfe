import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../../core/models/contact-form';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public param;

  constructor() {
  }

  ngOnInit() {
    this.param = { year: new Date().getFullYear() };
  }
}
