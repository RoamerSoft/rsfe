import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
