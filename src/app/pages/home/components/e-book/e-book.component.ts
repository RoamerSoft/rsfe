import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
