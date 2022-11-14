import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ScrollService} from "../../../core/services/scroll-service/scroll.service";


@Component({
  selector: 'app-infographic-checkout',
  templateUrl: './bga-modal.component.html',
  styleUrls: ['./bga-modal.component.scss'],
})
export class BgaModalComponent implements OnInit, OnDestroy {
  @Input() boldTitle: string;
  @Input() title: string;
  @Input() body: string;
  @Input() buttonText: string;
  @Input() cyberMonday: boolean

  @Output() buttonClicked = new EventEmitter<void>();

  constructor(
    public activeModal: NgbActiveModal,
    private scrollService: ScrollService
  ) {
  }

  ngOnInit() {
    this.scrollService.disableScrolling();
  }

  ngOnDestroy(): void {
    this.scrollService.enableScrolling();
  }

}
