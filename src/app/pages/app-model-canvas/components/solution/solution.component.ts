import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
