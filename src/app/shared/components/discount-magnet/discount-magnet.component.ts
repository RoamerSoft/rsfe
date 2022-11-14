import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-discount-magnet',
  templateUrl: './discount-magnet.component.html',
  styleUrls: ['./discount-magnet.component.scss']
})
export class DiscountMagnetComponent implements OnInit {
  @Output() closeMagnet = new EventEmitter<void>();
  @Output() usedButton = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
