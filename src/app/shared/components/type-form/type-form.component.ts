import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss']
})
export class TypeFormComponent implements OnInit, AfterViewInit {
  @Input() formId: string;
  @Input() height: number;
  @Input() heightCorrection = 0;
  @Input() modalMode: boolean;

  constructor(private modal: NgbActiveModal) {
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

  public closeModal(): void {
    this.modal.close();
  }

}
