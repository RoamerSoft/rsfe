import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wd-solution',
  templateUrl: './wd-solution.component.html',
  styleUrls: ['./wd-solution.component.scss']
})
export class WdSolutionComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
