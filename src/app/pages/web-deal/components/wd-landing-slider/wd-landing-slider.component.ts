import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wd-landing-slider',
  templateUrl: './wd-landing-slider.component.html',
  styleUrls: ['./wd-landing-slider.component.scss']
})
export class WdLandingSliderComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
