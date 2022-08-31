import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss']
})
export class TypeFormComponent implements OnInit, AfterViewInit {
  @Input() formId: string;
  @Input() height: number;
  @Input() heightCorrection = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Show form
    typeformEmbed.createWidget(this.formId, {
      container: document.querySelector('#formContainer'),
      height: this.height - this.heightCorrection,
      lazy: true
    });
  }

}
