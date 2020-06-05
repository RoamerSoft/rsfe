import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interruption-quote',
  templateUrl: './interruption-quote.component.html',
  styleUrls: ['./interruption-quote.component.scss']
})
export class InterruptionQuoteComponent implements OnInit {

  @Input() quote: string;

  constructor() { }

  ngOnInit() {
  }

}
