import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ScrollService } from '../../../core/services/scroll-service/scroll.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss']
})
export class TypeFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() formId: string;
  @Input() height: number;
  @Input() heightCorrection = 0;
  @Input() modalMode: boolean;

  constructor(private modal: NgbActiveModal, private scrollService: ScrollService) {
  }

  ngOnInit() {
    if (this.modalMode) {
      this.scrollService.disableScrolling();
    }
  }

  ngAfterViewInit(): void {
    typeformEmbed.createWidget(this.formId, {
      container: document.querySelector('#formContainer'),
      height: this.height - this.heightCorrection,
      lazy: true
    });
  }


  ngOnDestroy(): void {
    this.scrollService.enableScrolling();
  }

  public closeModal(): void {
    this.modal.close();
  }

}
