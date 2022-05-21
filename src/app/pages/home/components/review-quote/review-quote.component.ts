import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-quote',
  templateUrl: './review-quote.component.html',
  styleUrls: ['./review-quote.component.scss'],
})
export class ReviewQuoteComponent implements OnInit {
  @Input() quote: string;
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }
}
